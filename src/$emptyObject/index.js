module.exports = obj => (require('../$getProto'))(obj) == 'Object' && Object.keys(obj).length === 0
