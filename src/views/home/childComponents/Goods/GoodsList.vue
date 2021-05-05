<template>
  <div id="GoodsList">
    <GoodsListItem
      class="GoodsListItem"
      v-for="(item, i) in GoodsList"
      :key="i"
      :ListItem="item"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  props: {
    GoodsList: {
      type: Array,
      default() {
        return [];
      },
      // 忘了什么,这里必须得是一个函数
      // default: [],
    },
  },
  components: { GoodsListItem },
};
</script>

<style lang="scss" scoped>
#GoodsList {
  padding: 0 4px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .GoodsListItem {
    padding-top: 5px;
    padding-bottom: 5px;

    // 这里最好不要设置px,不好做后期适配
    width: 48%;
  }
}
</style>
