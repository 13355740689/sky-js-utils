let typeOf = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
    return typeof obj
} : function (obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
}

// 为空校验(包含null、0、'')
const isNull = str => {
    return !!!str
}

// 是否是对象
const isObject = obj => {
    return (typeof obj === 'undefined' ? 'undefined' : typeOf(obj)) === 'object' && obj !== null
}

// 深拷贝一个对象
function extend(obj) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key]
    }
    if (isObject(obj) && args.length > 0) {
        if (Object.assign) {
            return Object.assign.apply(Object, [obj].concat(args))
        }
        args.forEach((arg) => {
            if (isObject(arg)) {
                Object.keys(arg).forEach(function (key) {
                    obj[key] = arg[key]
                })
            }
        })
    }
    return obj
}

// 去字符串头尾空格
const trim = str => {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 是否在微信浏览器中
const isInWx = () =>{
    const reg = /MicroMessenger/i
    const ua = window.navigator.userAgent.toLowerCase()
    return ua.match(reg) == 'micromessenger'
}

// 是否在支付宝浏览器中
const isInAli = () =>{
    const reg = /AlipayClient/
    const ua = window.navigator.userAgent
    return reg.test(ua)
}

export default {
    isNull , isObject , extend , trim , isInWx , isInAli
}