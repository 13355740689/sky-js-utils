let typeOf = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
    return typeof obj
} : function (obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
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

export default {
    isObject , extend
}