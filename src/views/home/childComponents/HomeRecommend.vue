<template>
  <div id="HomeRecommend">
    <div class="item" v-for="item in recommend.list" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      // type: Object,
      // default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
#HomeRecommend {
  display: flex;
  text-align: center;
  font-size: 14px;
  color: #000;
  padding: 15px 0px 10px;
  box-shadow: 0px 0.5px 2px rgba(150, 150, 150, 0.3);

  .item {
    flex: 1;
    img {
      width: 70px;
      margin-bottom: 5px;
    }
  }
}
</style>
