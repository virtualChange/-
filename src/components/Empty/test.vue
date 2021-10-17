<template>
  <div class="text-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./index.vue";
export default {
  components: {
    Empty
  }
};
</script>

<style lang='less' scope>
.text-container {
  width: 500px;
  height: 500px;
  border: 1px solid red;
  margin:  50px auto;
}
</style>