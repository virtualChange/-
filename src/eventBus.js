//事件总线
//vue.$emit 触发事件
//vue.$on  监听事件
//vue.$off  移除事件



import Vue from 'vue';
const eventBus = new Vue()
Vue.prototype.$Bus = eventBus

// 事件
//事件总线可以在任何位置触发
//1. mainScorll  主区域的滚动条事件
// 2. setMainScroll  设置滚动区域的滚动高度


export default eventBus