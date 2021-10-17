import Vue from 'vue'
import Vuex from 'vuex'
import banner from './banner'
import setting from './setting'
Vue.use(Vuex)
// console.log(banner);
export default new Vuex.Store({
    modules: {
        banner,
        setting
    },
    static: true
})
