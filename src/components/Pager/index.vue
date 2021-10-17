<template>
  <div class="pager-container">
    <a @click="clickPage(1)" :class="{
        disabled: current === 1,
      }">|&lt;</a>
    <a @click="clickPage(current - 1)" :class="{
        disabled: current === 1,
      }">&lt;</a>
    <a
      v-for="(n, i) in pageArr"
      @click="clickPage(n)"
      :key="i"
      :class="{ current: current === n }"
    >{{ n }}</a>
    <a
      @click="clickPage(current + 1)"
      :class="{
        disabled: current === pageNumber
      }"
    >&gt;</a>
    <a
      @click="clickPage(total)"
      :class="{
        disabled: current === pageNumber
      }"
    >&gt;|</a>
  </div>
</template>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  user-select: none;
  a {
    color: @primary;
    padding: 0 6px;
    &.current {
      color: @words;
      font-weight: bold;
    }
    &:hover {
      cursor: pointer;
    }
    &.disabled {
      color: @words;
    }
  }
}
</style>>
<script>
export default {
  props: {
    current: {
      //当前页码
      type: Number,
      default: 1
    },
    total: {
      // 总数据量
      type: Number,
      default: 0
    },
    limit: {
      //每页显示的数据量
      type: Number,
      default: 10
    },
    visibleNumber: {
      //显示多少页码
      type: Number,
      default: 10
    }
  },
  computed: {
    visibelMin() {
      //可见的最小页码
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibelMax() {
      //可见的最大页码
      let max = this.visibelMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    pageNumber() {
      //最大显示页数
      return Math.ceil(this.total / this.limit);
    },
    pageArr() {
      let arr = [];
      for (let i = this.visibelMin; i <= this.visibelMax; i++) {
        arr.push(i);
      }
      return arr;
    }
  },
  methods: {
    clickPage(n) {
      if (n > this.pageNumber) {
        n = this.pageNumber;
      }
      if (n < 1) {
        n = 1;
      }
      this.$emit("pageChange", n);
    }
  }
};
</script>
