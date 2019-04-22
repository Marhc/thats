module.exports = obj => (require('../$getProto'))(obj) == 'Array' && !obj.length
