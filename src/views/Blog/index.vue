<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import ImageLoader from "@/components/ImageLoader";
import Pager from "@/components/Pager";
import BlogList from "./components/BlogList.vue";
import BlogCategory from "./components/BlogCategory.vue";
export default {
  data() {
    return {};
  },
  components: {
    Layout,
    ImageLoader,
    Pager,
    BlogCategory,
    BlogList,
  },
  
};
</script>

<style lang="less" scoped>
.blog-container {
  height: 100%;
}
</style>
