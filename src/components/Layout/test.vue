<template>
  <div class="test-container">
    <Layout>
      <template v-slot:left>
        <div class="left">left</div>
      </template>
      <div class="main">main</div>
      <template v-slot:right>
        <div class="right">right</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>

.test-container {
  width: 70%;
  height: 600px;
  border: 1px solid;
  .left {
    width: 200px;
    height: 100%;
    background: blue;
  }
  .main {
    width: 100%;
    height: 100%;
    background: red;
  }
  .right {
    width: 150px;
    height: 100%;
    background: yellow;
  }
}
</style>