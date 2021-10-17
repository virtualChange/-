import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)
const router = new Router({
    routes,
    // mode: "history"
})

router.afterEach((to,from)=> {
    document.title = to.meta.title
})
export default router