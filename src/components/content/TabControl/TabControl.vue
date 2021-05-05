<template>
  <div id="TabControl">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="TabControl_item"
      @click="itemClick(index)"
      :class="{ active: index === currentIndex }"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: { type: Array, default: [] },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>
<style lang="scss" scoped>
#TabControl {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 10px 0;
  display: flex;
  text-align: center;
  font-size: 16px;

  .TabControl_item {
    flex: 1;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    box-shadow: 0px 0.5px 2px rgba(150, 150, 150, 0.4);
  }
  .active {
    color: var(--color-tint);
    border-bottom: 3px solid var(--color-tint);
  }
}
</style>
