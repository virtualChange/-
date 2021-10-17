<template>
  <Layout>
    <div ref="container" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
      <Comment v-if="data" />
    </div>
    <template v-slot:right>
      <div class="right-container" v-loading="isLoading">
        <DetailTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import BlogDetail from "./components/BlogDetail";
import DetailTOC from "./components/DetailTOC";
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import Comment from "./Comment";
import setMainScroll from '@/mixins/setMainScroll';
export default {
  mixins: [fetchData(null),setMainScroll('container')],
  components: {
    BlogDetail,
    DetailTOC,
    Layout,
    Comment,
  },
  methods: {
    async fetchData() {
      return await getBlog();
    },
    // handleScroll() {
    //   this.$Bus.$emit("mainScroll", this.$refs.container);
    // },
    // setMainScroll(scrollTop) {
    //   this.$refs.container.scrollTop = scrollTop;
    // },
  },
  // created() {
  //   this.$Bus.$on("setMainScroll", this.setMainScroll);
  // },
  // mounted() {
  //   this.$refs.container.addEventListener("scroll", this.handleScroll);
  // },
  // beforeDestroy() {
  //   this.$Bus.$off("setMainScroll", this.setMainScroll);
  //   this.$Bus.$emit("mainScroll");
  //   this.$refs.container.removeEventListener("scroll", this.handleScroll);
  // },
  updated() {
    const hsah = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hsah;
    }, 50);
  },
};
</script>

<style scoped lang='less'>
.main-container {
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  position: relative;
  scroll-behavior: smooth;
}
.right-container {
  padding: 25px;
  height: 100%;
  width: 200px;
  box-sizing: border-box;
  position: relative;
}
</style>