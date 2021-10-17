<template>
  <div class="app-container">
    <Layout>
      <template v-slot:left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template v-slot:default>
        <router-view></router-view>
      </template>
    </Layout>
    <ToTop/>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import ToTop from "@/components/ToTop";
export default {
  name: "App",
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
  
};
</script>

<style scoped lang='less'>
@import "~@/styles/var.less";
.app-container {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  .aside {
    width: 250px;
    height: 100%;
  }
}
</style>
