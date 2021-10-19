<template>
  <div class="image-loader-container">
    <img v-if='!done' :src="placeholder" alt />
    <img :src="src" alt style="fliter:blur(2vw)" :style="{
      opacity: loaded ? 1 : 0,
      transition: `${duration}ms`
    }"
    @load='handleLoad' 
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    },
    placeholder: {
      type: String
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      loaded: false,
      done: false
    };
  },
  methods: {
    handleLoad() {
      this.loaded = true
      setTimeout(()=> {
        this.done = true;
        this.$emit('load')
      },this.duration)
    }
  }
};
</script>

<style lang='less' scoped>
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>