<template>
  <div id="GoodsListItem">
    <img :src="ListItem.show.img" @load="imageLoad" />
    <div>
      <p>{{ ListItem.title }}</p>
      价格:<span class="price">{{ ListItem.price }}</span> 收藏数:<span
        class="collect"
        >{{ ListItem.cfav }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    ListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      // 这里有三种方式:
      // 1-可以触发父级事件,但是需要逐层传递,比较麻烦
      // 2-可以借助Vuex
      // 3-事件总线  this.$bus.emit()  this.$bus.on()  注意需要先挂载到原型上
      this.$bus.$emit("itemImageLoad");
    },
  },
};
</script>

<style lang="scss" scoped>
#GoodsListItem {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #000;
  img {
    border-radius: 5px;
    width: 100%;
  }

  div {
    margin-top: 10px;
    font-size: 14px;
    color: #4d4d4d;

    p {
      margin-bottom: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      /*控制在3行*/
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 15px;
    }

    .price {
      font-weight: 600;
      color: var(--color-tint);
    }
    .collect {
      font-weight: 600;
      color: var(--color-tint);
    }
  }
}
</style>
