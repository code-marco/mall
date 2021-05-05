<template>
  <div id="app">
    <router-view />
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "content/mainTabbar/MainTabBar.vue";
export default {
  name: "App",
  components: { MainTabBar },
};
</script>

<style lang="scss" scoped>
@import "./assets/css/base.css";
</style>
