// 获取组件个根元素
import Vue from 'vue'
export default function(comp, props) {
    const vm = new Vue({
        render: (h) => h(comp, { props })//使用vue render函数渲染comp组件
    })
    vm.$mount() //挂载后才能得到实例
    return vm.$el
}
