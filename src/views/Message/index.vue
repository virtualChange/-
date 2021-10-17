<template>
  <div class="message-container" ref="container">
    <MessageArea
      class="comment-container"
      :list="data.rows"
      @submit="handleSubmit"
      title="评论"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
    />
  </div>
</template>


<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import { getComments, postComment } from "@/api/blog";
import setMainScroll from "@/mixins/setMainScroll";
export default {
  mixins: [fetchData({ total: 0, rows: [] }), setMainScroll("container")],
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
      // console.log(123);
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
    pageScroll() {
      this.$Bus.$emit("mainScroll", this.$refs.container);
    },
  },
  created() {
    window.getMoreComment = this.getMoreComment;
  },
  mounted() {
    this.$Bus.$on("mainScroll", this.handleScroll);

    this.$refs.container.addEventListener("scroll", this.pageScroll);
  },
  destroyed() {
    this.$Bus.$off("mainScroll", this.handleScroll);
    this.$refs.container.removeEventListener("scroll", this.pageScroll);
  },
};
</script>

</script>

<style lang='less' scoped>
.message-container {
  width: 100%;
  height: 100%;
  padding: 25px;
  overflow-y: auto;
  // position: relative;
  scroll-behavior: smooth;
  .message-area-container {
    width: 700px;
    margin: 0 auto;
  }
}
</style>
