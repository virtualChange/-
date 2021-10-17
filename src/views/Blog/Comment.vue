<template>
  <div>
    <MessageArea
      class="comment-container"
      :list="data.rows"
      @submit="handleSubmit"
      title="评论"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
    />
    <div class="more" v-if="!hasMore">没有更多了</div>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import { getComments, postComment } from "@/api/blog";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  data() {
    return {
      page: 1,
      limit: 10,
      blogid: this.$route.params.id,
    };
  },
  components: {
    MessageArea,
  },
  computed: {
    hasMore() {
      return this.data.rows.length <= this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return await getComments(this.blogid);
    },
    async handleSubmit(fromData, callback) {
      const result = await postComment({
        id: this.blogid,
        ...fromData,
      });
      this.data.rows.unshift(result);
      this.data.total++;
      callback("评论成功");
    },
    //获取更多评论
    async getMoreComment() {
      if (!this.hasMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const result = await getComments(this.blogid, this.page);
      this.data.total = result.total;
      this.data.rows = this.data.rows.concat(result.rows);
      this.isLoading = false;
    },
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        return;
      }
      //滚动条到底部的距离
      const range = 200;
      const dis = dom.scrollHeight - dom.scrollTop - dom.clientHeight;
      if (dis < range) {
        this.getMoreComment();
      }
    },
  },
  created() {
    window.getMoreComment = this.getMoreComment;
    this.$Bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$Bus.$off("mainScroll", this.handleScroll);
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.comment-container {
  margin-top: 150px;
}
.more {
  text-align: center;
  color: @gray;
}
</style>