<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'Detail',
              params: {
                id: item.id,
              },
            }"
          >
            <!-- <img :src="item.thumb" :alt="item.title" :title="item.title" /> -->
            <img v-layz="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: 'Detail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ getFullData(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论:　{{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'Category',
                params: {
                  categoryId: item.category.id,
                },
              }"
              @click="handlePageChange(item.category)"
              >{{ item.category.name }}</RouterLink
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <Pager
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      @pageChange="handlePageChange"
    />
    <Empty v-if="!data.rows.length"/>
  </div>
</template>

<script >
import Pager from "@/components/Pager";
import { getFullData } from "@/utils";
import fetchData from "@/mixins/fetchData";
import * as blogApi from "@/api/blog";
import setMainScroll from "@/mixins/setMainScroll";
import Empty from "@/components/Empty";
export default {
  mixins: [fetchData({}), setMainScroll("container")],
  components: {
    Pager,
    Empty
  },
  watch: {
    async $route() {
      this.isLoading = true;
      //滚动高度 变成0
      this.$refs.container.scrollTop = 0;
      this.data = {};
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
  computed: {
    //获取路由信息
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        page,
        limit,
        categoryId,
      };
    },
  },
  methods: {
    async fetchData() {
      return await blogApi.getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    getFullData,
    handlePageChange(newPage) {
      // this.routeInfo.page = newPage;

      //改变页码,通过route
      // 2种地址,一种有分类一种没有分类
      //1.cate/2?page=10&limit=10
      //2. cata?page=10&limit=10
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "Category",
          params: {
            categoryId: this.routeInfo.categoryId,
          },
          query,
        });
      }
    },
  },
  created() {
    // console.log(this.$route);
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
