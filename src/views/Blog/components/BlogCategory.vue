<template>
  <div class="blog-category-container" v-loading="isLoading">
    <div v-if="!isLoading">
      <h2>文章分类</h2>
      <RightList :list="list" @select="hanleSelect" />
    </div>
  </div>
</template>

<script>
import RightList from "./RightList";
import fetchData from "@/mixins/fetchData";
import { getBlogTypes } from "@/api/blog";
export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  computed: {
    limit() {
      return +this.$route.query.limit || 10;
    },
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    list() {
      const total = this.data.reduce((a, b) => {
        return a + b.articleCount;
      }, 0);
      const result = [
        { name: "全部", articalcount: total, id: -1, articleCount: total },
        ...this.data,
      ];
      return result.map((it) => {
        return {
          ...it,
          isSelect: it.id === this.categoryId,
          aside: `${it.articleCount}篇`,
        };
      });
    },
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    hanleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "Category",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-category-container {
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  height: 100%;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
    padding-bottom: 12px;
  }
}
</style>