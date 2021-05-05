<template>
  <div id="BetterScroll" ref="BetterScroll">
    <!--  class="content" -->
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 终极封装形态
import BScroll from "better-scroll";
export default {
  name: "BetterScroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: { type: Number, default: 0 },
    pullUpLoad: { type: Boolean, default: false },
  },
  mounted() {
    // 应该尽量避免使用原生获取方式,因为不够精准,否则到时候插槽前还有一个叫 BetterScroll 的就不好了
    // let BScroll = new BScroll(document.querySelector("#BetterScroll"), {});
    this.scroll = new BScroll(this.$refs.BetterScroll, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("goTop", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("loadMore");
    });
  },
  methods: {
    // 第三个参数是速度500ms
    scrollTo(x = 0, y = 0, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll.refresh();
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
