import eventBus from '@/eventBus'
import debounce from '@/utils/debounce'
import layzImgSrc from '@/assets/default.gif' //默认图片地址
let imgs = [];//当前页面中的图片元素
function setImg(img) {
    //处理图片的地址
    img.dom.src = layzImgSrc
    const domRect = img.dom.getBoundingClientRect();
    const minHeight = -domRect.height || -150;
    const clientHeight = document.documentElement.clientHeight
    if (domRect.top >= minHeight && domRect.top <= clientHeight) {
        // 不在视口内
        // const tempImg = new Image()
        // tempImg.onload = function () {
        //     img.dom.src = img.src
        // }
        // tempImg.src = img.src
        img.dom.src = img.src
        imgs = imgs.filter(i => i !== img)
    }
}
function setImgs() {
    //处理所有图片地址
    for (const img of imgs) {
        setImg(img)
    }
}

function handle() {
    // console.log(imgs)
    setImgs()
}

eventBus.$on('mainScroll', debounce(handle, 500))
//图片懒加载指令对象
export default {
    inserted(el, binding) {
        //当元素插入节点时
        const img = {
            dom: el,
            src: binding.value,
        }
        imgs.push(img)
        setImg(img)
    },
    unbind(el, binding) {
        //当元素移除后
        imgs = imgs.filter(img => img.dom !== el) //当图片已经不存在
    }
}