// 弹出消息
import getCompDom from './getCompDom'
import Icon from '@/components/Icon'
import styles from '@/styles/showMessage.module.less'
export default function (options = {}) {
    const content = options.content || '提示消息'
    const type = options.type || 'info'
    const duration = options.duration || 2000
    const container = options.container || document.body
    //创建div元素
    const div = document.createElement('div');
    const icon = getCompDom(Icon, {
        type
    })
    //设置内容
    div.innerHTML = `${icon.outerHTML}<span>${content}</span>`
    const typeClass = styles[`message-${type}`]
    div.className = `${styles.message} ${typeClass}`
    //设置样式
    //添加到容器当中
    container.appendChild(div)

    const containerPosition = getComputedStyle(container).position
    if (!duration) {
        if (containerPosition === 'static') {
            container.style.position = 'relative'
        }
    }
    div.clientHeight//触发重排
    div.style.opacity = 1
    div.style.transform = 'translate(-50% ,-50%)'
    //处理延迟样式
    setTimeout(() => {
        div.style.opacity = 0
        div.style.transform = 'translate(-50% ,-50%) translateY(-25px)'

        div.addEventListener('transitionend', function () {
            div.remove()
            options.callback && options.callback();
        }, {
            once: true
        })
    }, duration)

}