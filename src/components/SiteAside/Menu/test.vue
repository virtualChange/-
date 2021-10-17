<template>
<div class="test-container">
  <Menu />
</div>
</template>

<script>
import Menu from './'
export default {
    components :{
        Menu
    }
}
</script>

<style lang='less'>
@import '~@/styles/var.less';
.test-container {
    width: 300px;
    height: 600px;
    background: @dark;
}
</style>