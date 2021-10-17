<template>
    <div class="test-container">
        <SiteAside />
    </div>
</template>
<style lang='less'>
@import "~@/styles/global.less";
@import "~@/styles/var.less";

.test-container {
  margin: 50px 0;
  width: 250px;
  height: 800px;
  border: 1px solid;
  background: @dark;
  .avatar-container {
    margin: 20px auto;
  }
}
</style>

<script>

import SiteAside from "@/components/SiteAside";

export default {
  components: {
    SiteAside
  },
};
</script>

