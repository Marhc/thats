module.exports = obj => {
    let res;
    if (typeof obj =='number' && obj%1===0) {
        res = 'Integer'
    } else if (typeof obj =='number' && !obj) {
        res = 'NaN'
    } else if (typeof obj =='number' && Math.abs(obj) == Infinity) {
        res = 'Infinity'
    } else if (typeof obj =='number') {
        res = 'Float'
    } else {
        res = Object.prototype.toString.call(obj).slice(8,-1)
    }
    return res
}
