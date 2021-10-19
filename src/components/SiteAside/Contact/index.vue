<template>
  <div class="contact-container">
    <a
      v-for="item in items"
      :href="item.href"
      :key="item.icon"
      :class="{
        relative: item.src,
      }"
    >
      <Icon :type="item.icon" />
      <span>{{ item.text }}</span>
      <div v-if="item.src" class="pop">
        <img :src="item.src" alt="" />
      </div>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  data() {
    return {
      items: [
        {
          href: "https://github.com/virtualChange",
          icon: "github",
          text: "github",
        },
        {
          href: "mailto:1151630419@qq.com",
          icon: "mail",
          text: "1151630419@qq.com",
        },
        {
          href: "tencent://message/?Menu=yes&uin=1151630419&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
          icon: "qq",
          text: "1151630419",
          src: "https://img1.baidu.com/it/u=2410539360,112339169&fm=253&fmt=auto&app=120&f=PNG?w=300&h=300",
        },
        {
          href: "",
          icon: "weixin",
          text: "virtual",
          src: "https://img1.baidu.com/it/u=2410539360,112339169&fm=253&fmt=auto&app=120&f=PNG?w=300&h=300",
        },
      ],
    };
  },
  components: {
    Icon,
  },
};
</script>

<style lang='less' scope>
@import "~@/styles/global.less";
@lineHeight: 30px;
.contact-container {
  color: @gray;
  .icon-container {
    font-size: 25px;
    vertical-align: middle;
    margin-right: 10px;
    color: #fff !important;
  }
  a {
    cursor: pointer;
    display: block;
    padding: 6px 15px;
    margin: 8px 0;
    &.relative {
      position: relative;
    }
    &:hover {
      .pop {
        transform: scale(1);
      }
    }
    img {
      width: 150px;
      height: 150px;
    }
    span {
      font-size: 14px;
      margin-left: 6px;
    }
    .pop {
      position: absolute;
      bottom: 35px;
      transform: scale(0);
      transition: 0.5s;
      transform-origin: bottom center;
      &::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: red;
        left: 50%;
        bottom: -5px;
        transform: translate(-50%, -50%) rotateZ(45deg);
        background-color: #fff;
      }
    }
  }
}
</style>