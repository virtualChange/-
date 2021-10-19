<template>
  <div class="site-aside-container">
    
    <Avatar :size="150" :src="data.avatar" v-show="data.avatar" />
    <h2>我的个人空间</h2>
    <Menu v-show="data.avatar" />
    <Contact v-show="data.avatar" />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
  created() {
    this.$store.dispatch("setting/fetchData");
  },
};
</script>

<style lang='less' scope>
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  overflow: hidden auto;
  background: @dark;
  .avatar-container {
    margin: 30px auto;
  }
  .menu-container {
    margin: 50px 0;
  }
  h2 {
    text-align: center;
   color: @lightWords;
}
}
</style>