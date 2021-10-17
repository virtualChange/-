<template>
  <div class="app">
    <Pager :current="current" :total="88" :limit="5" @pageChange="changePage" />
  </div>
</template>

<style lang="less" scoped>
.pager-container {
  margin-top: 200px;
}
</style>
<script>
import Pager from "@/components/Pager";
export default {
  name: "App",
  components: {
    Pager
  },
  data() {
    return {
      current: 1
    };
  },
  methods: {
    changePage(page) {
      this.current = page;
    }
  }
};
</script>
