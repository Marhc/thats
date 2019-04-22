module.exports = obj => 'Null Undefined Boolean String Number Symbol'.indexOf((require('../$getProto'))(obj)) > -1
