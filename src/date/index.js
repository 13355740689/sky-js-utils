import moment from 'moment'

/**
 * 时间戳转换成 YYYY-MM-DD 格式
 * @param {Number} times 时间戳
 * @param {String} separator 返回字符串年月日中间的分隔符，默认为-，即返回1990-08-17
 */
const timesToYmd = (times , separator = '-' ) => {
    return moment(times).format(`YYYY${separator}MM${separator}DD`)
}

/**
 * 时间戳转换成 YYYY-MM-DD HH:MM:SS 格式
 * @param {Number} times 时间戳
 * @param {String} separator 返回字符串年月日中间的分隔符，默认为-，即返回1990-08-17
 * @param {String} separatorOther 返回字符串时分秒中间的分隔符，默认为:，即返回23:59:59
 */
const timesToYmdHms = (times , separator = '-' , separatorOther = ':' ) => {
    return moment(times).format(`YYYY${separator}MM${separator}DD HH${separatorOther}mm${separatorOther}ss`)
}

/**
 * 返回日期字符串，对应的时间戳
 * @param {String} dateStr 时间的字符串，如2018-08-28、2018/08/28 23:59:59
 * @param {String} formateString 时间字符串对应的格式，如YYYY-MM-DD、YYYY/MM/DD hh:mm:ss
 */
const dateStrToTimes = (dateStr , formateString) =>{
    return moment(dateStr , formateString).valueOf()
}

/**
 * 返回moment 日期实例
 * @param {Object} param 可以为String也可以为日期Object，不传参返回当前时间的moment对象，传参时返回传参对应时间的moment对象
 */
const getMomentObj = param =>{
    return param ? moment(param) : moment()
}


export default {
    timesToYmd , timesToYmdHms , dateStrToTimes , getMomentObj
}