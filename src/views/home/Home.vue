<template>
  <div id="home">
    <NavBar class="home_NavBar">
      <div slot="center" class="home_NavBar_text">购物街</div>
    </NavBar>
    <BetterScroll
      class="content"
      ref="content"
      :probeType="3"
      :pullUpLoad="true"
      @goTop="goTop"
      @loadMore="loadMore"
    >
      <HomeSwiper :banners="banners" />
      <HomeRecommend :recommend="recommend" />
      <FeatureView />
      <TabControl
        class="tab_Control"
        :titles="['流行', '精选', '新款']"
        @tabClick="tabClick"
      />
      <GoodsList :GoodsList="showGoods" />
    </BetterScroll>
    <!-- 注意  组件不能直接监听原生事件  必须加上 .native 才行 -->
    <BackTop @click.native="BackTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 公用组件类
import NavBar from "common/NavBar/NavBar.vue";
import BetterScroll from "common/BetterScroll/BetterScroll.vue";
import TabControl from "content/TabControl/TabControl.vue";
import BackTop from "content/BackTop/BackTop.vue";

// 内部组件类
import HomeSwiper from "./childComponents/HomeSwiper";
import HomeRecommend from "./childComponents/HomeRecommend";
import FeatureView from "./childComponents/FeatureView";
import GoodsList from "./childComponents/Goods/GoodsList.vue";

// 请求接口类
import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      dKeywords: [],
      keywords: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      // 默认当前为pop类型
      currentType: "pop",
      isShowBackTop: false,
    };
  },
  // 使用计算属性,对 data 中的 currentType 动态修改,给组件动态传值
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },

  // 网上的做法,监听  没做出来
  // watch: {
  //   showGoods() {
  //     this.$nextTick(function () {
  //       this.$refs.content.scrollStar();
  //     });
  //   },
  // },

  // 组件注册
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    BetterScroll,
    BackTop,
  },
  created() {
    // 代码组织方式
    // 生命周期函数中,尽量不要逻辑复杂,详细的逻辑放在外面,在methods中写一个方法,这里调用
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    this.$bus.$on("itemImageLoad", () => {
      // console.log(this.$refs.content.scroll);
      this.$refs.content.refresh();
    });
  },
  methods: {
    /*
      网络请求相关:
    */
    // 获取banner数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner;
        this.dKeywords = res.data.dKeyword;
        // this.keywords = res.data.keywords;
        // this.recommend = res.data.recommend;
      });
    },
    // 获取数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, 1).then((res) => {
        // 将新数组结构后推入原数组
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(this.$refs.content);
        this.$refs.content.finishPullUp();
      });
    },

    /*
      事件监听相关:
    */
    // 监听 TabControl 组件内部的点击事件
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 点击回到顶部
    BackTopClick() {
      this.$refs.content.scrollTo();
    },
    goTop(position) {
      this.isShowBackTop = -position > 1000 ? true : false;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
  },
};
</script>

<style lang="scss" scoped>
#home {
  padding-top: 45px;
  // height: 100vh;

  .home_NavBar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    background-color: var(--color-tint);
  }

  .tab_Control {
    // 好牛逼的属性  css自动监听滚动条  如果达到顶部,将会换成position:fixed
    position: sticky;
    top: 44px;
  }
  .content {
    overflow: hidden;
    // height: 300px;
    position: absolute;
    top: 45px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  // 第二种方法  calc
}
</style>
