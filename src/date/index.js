import moment from 'moment'

/**
 * 时间戳转换成 YYYY-MM-DD 格式
 * @param {Number} times 时间戳
 * @param {String} separator 返回字符串年月日中间的分隔符，默认为-，即返回1990-08-17
 */
const timesToYMD = (times , separator = '-' ) => {
    return moment(times).format(`YYYY${separator}MM${separator}DD`)
}


export default {
    timesToYMD
}