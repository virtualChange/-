<template>
  <div class="test-container">
    <div class="item" v-for="t in types" :key="t">
      <icon :type="t" />
      <lable>{{ t }}</lable>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "@/components/Icon";
export default {
  name: "App",
  components: {
    Icon
  },
  data() {
    return {
      types
    };
  }
};
</script>


<style  scoped>
.test-container {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 580px;
  flex-wrap: wrap;
}
.item {
  margin: 1em;
  text-align: center;
}
.icon-container {
  display: block;
}
</style>