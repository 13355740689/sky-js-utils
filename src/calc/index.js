/**
 * 返回arg1加上arg2的精确结果
 * @param {Number,String} arg1 
 * @param {Number,String} arg2 
 */
const add = (arg1, arg2) => {
    let r1, r2, m, c
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    c = Math.abs(r1 - r2)
    m = Math.pow(10, Math.max(r1, r2))
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        }
        else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    }
    else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m
}


/**
 * 返回arg1减去arg2的精确结果
 * @param {Number,String} arg1 
 * @param {Number,String} arg2 
 */
const sub = (arg1, arg2) => {
    let r1, r2, m, n
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2
    return Number(((arg1 * m - arg2 * m) / m).toFixed(n))
}


/**
 * 返回arg1乘以arg2的精确结果
 * @param {Number,String} arg1 
 * @param {Number,String} arg2 
 */
const mul = (arg1, arg2) => {
    let m = 0, s1 = arg1.toString(), s2 = arg2.toString()
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}


/**
 * 返回arg1除以arg2的精确结果
 * @param {Number,String} arg1 
 * @param {Number,String} arg2 
 */
const div = (arg1, arg2) => {
    let t1 = 0, t2 = 0, r1, r2
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
    r1 = Number(arg1.toString().replace(".", ""))
    r2 = Number(arg2.toString().replace(".", ""))
    return (r1 / r2) * Math.pow(10, t2 - t1)
}



export default {
    add, sub, mul, div
}