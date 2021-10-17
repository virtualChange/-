<template>
  <div class="menu-container">
    <RouterLink
      :to="{ name: item.link }"
      v-for="item in items"
      :key="item.link"
      :exact="item.exact"
    >
      <Icon :type="item.icon" />
      <span>{{ item.title }}</span>
    </RouterLink>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          link: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          link: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, // 只要当前路径以link开头，当前菜单就是选中的
        },
        {
          link: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          link: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          link: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  },
}; 
</script>

<style lang='less' scope>
@import "~@/styles/global.less";
.menu-container {
  color: @gray;
  font-size: 14px;
  a {
    height: 45px;
    line-height: 45px;
    cursor: pointer;
    padding-left: 50px;
    display: block;
    .icon-container {
      margin-right: 6px;
    }
    &.router-link-active, &:hover {
      background-color: darken(@words, 5%);
      color: #fff;
    }
  }
}
</style>