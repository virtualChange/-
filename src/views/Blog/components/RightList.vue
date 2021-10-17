<template>
  <ul class="right-list-container" v-if="list">
    <li v-for="(item, i) in list" :key="i" @click="handleClick(item)">
      <span
        :class="{
          active: item.isSelect,
        }"
        >{{ item.name }}</span
      >
      <span  class="aside" v-if="item.aside" :class="{
          active: item.isSelect,
        }" >
        {{item.aside}}
      </span>
      <RightList :list="item.children" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang='less' scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  margin: 0;
  padding: 0;
  .right-list-container {
    margin-left: 1.5em;
  }

  li {
    cursor: pointer;
    line-height: 40px;
   font-size: 14px;
    span.active {
      color: @warn;
      font-weight: bold;
      font-size: 16px;
      
    }.aside{
      color: @gray;
      font-size: 12px;
    }
    span {
      padding-right: 10px;
    }
  }
}
</style>