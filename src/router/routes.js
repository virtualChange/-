// import Home from '@/views/Home'
// import Blog from '@/views/Blog'
// import About from '@/views/About'
// import Message from '@/views/Message'
// import Project from '@/views/Project'
// import Detail from '@/views/Blog/Detail'
import { start, done, configure } from 'nprogress'
configure({
    showSpinner: false
})
import 'nprogress/nprogress.css'
import 'nprogress/nprogress.css'
function getComp(asyncComp) {
    return async () => {
        start()
        const comp = await asyncComp()
        done()
        return comp
    }
}
const routes = [
    {
        name: 'Home', path: '/', component: getComp(() => import('@/views/Home')), meta: {
            title: '首页'
        }
    },
    {
        name: 'Blog', path: '/blog', component: getComp(() => import('@/views/Blog')),
        meta: {
            title: '文章'
        }
    },
    {
        name: 'Category', path: '/blog/cate/:categoryId', component: getComp(() => import('@/views/Project')), meta: {
            title: '项目&效果'
        }
    },
    {
        name: 'Detail', path: '/blog/:id', component: getComp(() => import('@/views/Blog/Detail')), meta: {
            title: '文章详情'
        }
    },
    {
        name: 'About', path: '/about', component: getComp(() => import('@/views/About')), meta: {
            title: '关于我'
        }
    },
    {
        name: 'Message', path: '/message', component: getComp(() => import('@/views/Message')), meta: {
            title: '留言'
        }
    },
    {
        name: 'Project', path: '/project', component: getComp(() => import('@/views/Project')),
        meta: {
            title: '项目'
        }
    }
]

export default routes