//请求响应拦截器
import axios from "axios";
import showMessage from '@/utils/showMessage'
const ins = axios.create()///创建axios实例
ins.interceptors.response.use(function (res) {//拦截器
    if (res.data.code === 0) {
        return res.data.data
    } else {
        showMessage({ type: 'error', content: res.data.msg })
    }
    return null
})

export default ins