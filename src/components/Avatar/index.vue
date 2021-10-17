// 头像组件
<template>
  <img class="avatar-container" :src="url" :style='{width:size+"px", height: size + "px"}'>
</template>

<script>
export default {
  //注册属性
  props: {
    url: {
      type: String,
      // required: true,//属性必须
      // default: "https://img0.baidu.com/it/u=1077360284,2857506492&fm=26&fmt=auto"
    },
    size: {
      type: Number,
      default: 100
    }
  }
}
</script>

<style scoped>
.avatar-container {
  border-radius: 50%;
  display: block;
  object-fit: cover; /*  对图片进行剪切，保留原始比例： */
}
</style>