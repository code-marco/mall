<template>
  <div class="NavBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.NavBar {
  display: flex;
  height: 45px;
  line-height: 45px;
  box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
  text-align: center;
  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
}
</style>
