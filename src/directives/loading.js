//正在加载中 自定义组件
import loading from '@/assets/loading.svg'
import style from  './loading.module.less'
function createImg() {
    const img = document.createElement('img')
    img.src = loading
    img.dataset.role = 'loading'
    img.className = style.loading
    return img
}
function getLoadingImage(el)  {
    //判断el中是否有loading元素  
    return el.querySelector('img[data-role=loading]')
}
export default function (el, binding) {
    const curImg = getLoadingImage(el)
    const img = createImg()
    if(binding.value) {
        if(!curImg){
            el.appendChild(img)
        }
    }else {
        if(curImg) {
            curImg.remove()
        }
    }
    //1创建img图片
    //2加入到el元素中
    //3数据更新删除元素
}