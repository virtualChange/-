<template>
  <div class="to-top-container" v-show="show" @click="handleClick">Top</div>
</template>

<script>
export default {
  data() {
    return { show: false };
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 500;
    },
    handleClick() {
      this.$Bus.$emit("setMainScroll", 0);
    },
  },
  created() {
    this.$Bus.$on("mainScroll", this.handleScroll);
  },
  destoryed() {
    this.$Bus.$off("mainScroll", this.handleScroll);
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
  user-select: none;
  width: 50px;
  height: 50px;
  background: @primary;
  border-radius: 50%;
  position: fixed;
  right: 50px;
  bottom: 50px;
  text-align: center;
  line-height: 50px;
  z-index: 99;
  cursor: pointer;
  &:active {
    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.5);
  }
}
</style>