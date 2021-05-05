<template>
  <div id="BackTop">
    <img src="~assets/img/common/top.png" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style lang="scss" scoped>
#BackTop {
  position: fixed;
  // z-index: 999;
  right: 10px;
  bottom: 55px;
  img {
    width: 45px;
  }
}
</style>
