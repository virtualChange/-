<template>
  <div class="blog-toc-container" ref="toc">
    <h2>目录</h2>
    <RightList :list="toWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import  debounce from "@/utils/debounce";
export default {
  data() {
    return {
      activeAnchor: "",
    };
  },
  components: {
    RightList,
  },
  computed: {
    toWithSelect() {
      //根据toc数组,返回一个带有isSelect的数组
      const getToc = (t = []) => {
        return t.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getToc(t.children), //覆盖原有的属性
        }));
      };
      return getToc(this.toc);
    },
    //因为每个toc都有Anchor属性,对应的是H元素的ID,通过递归根据这些属性找到dom元素
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const iterator of toc) {
          const dom = document.getElementById(iterator.anchor);
          doms.push(dom);
          if (iterator.children) {
            addToDoms(iterator.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  props: {
    toc: {
      type: Array,
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    // 设置activeAnchor
    setActiveAnchor(scrollDom) {
      if (!scrollDom) {
        return;
      }
      this.activeAnchor = "";
      const range = 300;
      for (const dom of this.doms) {
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          return;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
  },
  created() {
    this.debounceHandleScroll = debounce(this.setActiveAnchor, 50);
    this.$Bus.$on("mainScroll", this.debounceHandleScroll);
  },
  destroyed() {
    this.$Bus.$off("mainScroll", this.debounceHandleScroll);
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  white-space: nowrap;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>
