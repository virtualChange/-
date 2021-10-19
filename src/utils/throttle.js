export default function (fn, delay = 100) {
    let before = +new Date()
    let _this = this
    return function (...args) {
        let after = +new Date()
        if(after - before  > delay) {
            before = +new Date() 
            fn.apply(_this,args)
        }
    }
}