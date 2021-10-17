<template>
  <div class="empty-container">
    <div class="icon-wrap">
      <Icon type="empty" />
      <span>{{ text}}</span>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  props: {
    text: {
      type: String,
      default: "无数据"
    }
  },
  components: {
    Icon
  }
};
</script>

<style lang='less' scope>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.empty-container {
  width: 100%;
  height: 100%;
  user-select: none;
  .self-center();
  color: @gray;
  text-align: center;
  font-size: 16px;
  .icon-wrap {
    background: transparent;
    .iconfont {
      font-size: 60px;
      display: block;
      margin-bottom: 6px;
    }
  }
}
</style>