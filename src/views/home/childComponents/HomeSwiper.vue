<template>
  <div id="homeSwiper">
    <Swiper>
      <SwiperItem v-for="item in banners.list" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper";
export default {
  props: {
    banners: {
      // 不知道为什么,这里出问题
      // type: Array,
      // default: () => {
      //   return {};
      // },
    },
  },
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>

<style lang="scss" scoped>
</style>
