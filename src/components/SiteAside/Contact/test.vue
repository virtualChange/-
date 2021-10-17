<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
export default {
  components: {
    Contact
  }
};
</script>

<style scope lang='less'>
@import "~@/styles/var.less";
.test-container {
  padding-top: 150px;
  box-sizing: border-box;
  width: 220px;
  height: 500px;
  border: 1px solid;
  background-color: @gray;
}
</style>