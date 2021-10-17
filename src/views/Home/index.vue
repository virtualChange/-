<template>
  <div class="home-container" ref="container" v-loading="isLoading">
    <ul
      class="carousel-container"
      :style="{
        marginTop: -clientHeight * index + 'px',
      }"
      @transitionend="handelTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <Carousel :carousel="item" />
      </li>
    </ul>
    <div class="icon arrow-up" @click="toIndex(index - 1)" v-show="index >= 1">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon arrow-down"
      @click="toIndex(index + 1)"
      v-show="data.length - 1 > index"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="guide">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{
          active: index === i,
        }"
        @click="toIndex(i)"
      ></li>
    </ul>
  </div>
</template>
<style scope lang='less'>
@import "~@/styles/var.less";
.home-container {
  user-select: none;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .carousel-container {
    height: 100%;
    transition: 0.5s;
    li {
      height: 100%;
    }
  }
  .guide {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    li {
      width: 8px;
      height: 8px;
      border: 1px solid #fff;
      background: #000;
      border-radius: 50%;
      margin: 15px;
      cursor: pointer;
      &.active {
        background: #fff;
      }
    }
  }
  .icon {
    position: absolute;
    cursor: pointer;
    left: 50%;
    transform: translateX(-50%);
    @iconHeight: 25px;
    font-size: 26px;
    color: @gray;
    padding: 20px;
    &.arrow-up {
      top: @iconHeight;
      animation: jump-up 2s infinite;
    }
    &.arrow-down {
      bottom: @iconHeight;
      animation: jump-down 2s infinite;
    }
  }
  @jump: 15px;
  @keyframes jump-up {
    0% {
      transform: translateY(-@jump);
    }
    50% {
      transform: translateY(@jump);
    }
    100% {
      transform: translateY(-@jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translateY(@jump);
    }
    50% {
      transform: translateY(-@jump);
    }
    100% {
      transform: translateY(@jump);
    }
  }
}
</style>

<script>
import Carousel from "./Carousel.vue";
import Icon from "@/components/Icon";
import  debounce  from "@/utils/debounce";
import {mapState} from 'vuex'
export default {
  components: {
    Carousel,
    Icon,
  },
  created() {
    this.$store.dispatch('banner/fetchData')
  },
  data() {
    return {
      clientHeight: 0,
      index: 0,
      iswhell: false,
    };
  },
  methods: {
   
    toIndex(index) {
      this.index = index;
    },
    handelTransitionEnd() {
      this.iswhell = false;
    },
    handleWhell(e) {
      //每个用户的鼠标滚动距离有大有小,不能使用判断滚动距离计算是否滚动
      //使用记号,滚动一次运动结束后才能继续下一次行为
      //判断deltaY的正负决定上下滚动
      if (this.iswhell) {
        return;
      }
      if (e.deltaY < 0 && this.index > 0) {
        this.iswhell = true;
        //向上滚动
        this.toIndex(this.index - 1);
      } else if (e.deltaY > 0 && this.index < this.data.length - 1) {
        this.iswhell = true;
        //向下滚动
        this.toIndex(this.index + 1);
      }
    },
    handleResize: debounce(function () {
      this.clientHeight = this.$refs.container.clientHeight;
    }, 200)
  },
  computed: {
    marginTop() {
      return -this.clientHeight * this.index + "px";
    },
    ...mapState('banner',['isLoading','data'])
  },
  mounted() {
    this.clientHeight = this.$refs.container.clientHeight;
    window.addEventListener("wheel", this.handleWhell);
    window.addEventListener("resize", this.handleResize);
  },

  destroyed() {
    //组件销毁,销毁绑定的事件
    removeEventListener("wheel", this.handleWhell);
    removeEventListener("resize", this.handleResize);
  },
};
</script>

