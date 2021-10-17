<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      @load="handleLoad"
    />
  </div>
</template>

<script>
import ImageLoader from "./index.vue";
export default {
  components: {
    ImageLoader
  },
  methods: {
    handleLoad() {
      // console.log("图片加载完成,可以处理其他事情");
    }
  }
};
</script>

<style scope>
.test-container {
  width: 500px;
  height: 500px;
  border: 1px solid;
  margin: 50px auto;
}
</style>