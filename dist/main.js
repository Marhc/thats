'use strict';

var _getProto = (obj => Object.prototype.toString.call(obj).slice(8, -1));

var _isNumber = (obj => typeof obj == 'number');

var _isInteger = (obj => _isNumber(obj) && obj % 1 === 0);

var _isInfinity = (obj => _isNumber(obj) && Math.abs(obj) == Infinity);

var _getType = (obj => {
  if (_isInteger(obj)) {
    return 'Integer';
  } else if (_isNumber(obj) && !obj) {
    return 'NaN';
  } else if (_isInfinity(obj)) {
    return 'Infinity';
  } else if (_isNumber(obj)) {
    return 'Float';
  } else {
    return _getProto(obj);
  }
});

var _isArray = (obj => obj instanceof Array);

var _isBoolean = (obj => typeof obj == 'boolean');

var _isDate = (obj => obj instanceof Date);

var _isDefined = (obj => !(obj == null));

var _isEmpty = (obj => obj == '');

var _isEmptyArray = (obj => _getProto(obj) == 'Array' && !obj.length);

var _isEmptyObject = (obj => _getProto(obj) == 'Object' && Object.keys(obj).length === 0);

var _isEmptyString = (obj => obj === '');

var _isError = (obj => obj instanceof Error);

var _isFalse = (obj => !obj);

var _isFloat = (obj => _isNumber(obj) && !!obj && Math.abs(obj) != Infinity && obj % 1 !== 0);

var _isFunction = (obj => typeof obj == 'function');

var _isString = (obj => typeof obj == 'string');

var _isJson = (obj => {
  try {
    return _isString(obj) && !!JSON.parse(obj);
  } catch (e) {
    return false;
  }
});

var _isMap = (obj => obj instanceof Map);

var _isNan = (obj => _isNumber(obj) && obj != obj);

var _isNil = (obj => obj == null);

var _isNull = (obj => obj === null);

var _isObject = (obj => _getProto(obj) == 'Object');

var _isPrimitive = (obj => 'Null Undefined Boolean String Number Symbol'.indexOf(_getProto(obj)) > -1);

var _isPromise = (obj => obj instanceof Promise);

var _isRegexp = (obj => obj instanceof RegExp);

var _isSafeNumber = (obj => _isNumber(obj) && obj == obj && Math.abs(obj) != Infinity);

var _isSafeString = (obj => _isString(obj) && obj !== '');

var _isSet = (obj => obj instanceof Set);

var _isSymbol = (obj => _getProto(obj) == 'Symbol');

var _isUndefined = (obj => obj === undefined);

var _isUnfilled = (obj => obj == null || obj === '');

exports.getProto = _getProto;
exports.getType = _getType;
exports.isArray = _isArray;
exports.isBoolean = _isBoolean;
exports.isDate = _isDate;
exports.isDefined = _isDefined;
exports.isEmpty = _isEmpty;
exports.isEmptyArray = _isEmptyArray;
exports.isEmptyObject = _isEmptyObject;
exports.isEmptyString = _isEmptyString;
exports.isError = _isError;
exports.isFalse = _isFalse;
exports.isFloat = _isFloat;
exports.isFunction = _isFunction;
exports.isInfinity = _isInfinity;
exports.isInteger = _isInteger;
exports.isJson = _isJson;
exports.isMap = _isMap;
exports.isNan = _isNan;
exports.isNil = _isNil;
exports.isNull = _isNull;
exports.isNumber = _isNumber;
exports.isObject = _isObject;
exports.isPrimitive = _isPrimitive;
exports.isPromise = _isPromise;
exports.isRegexp = _isRegexp;
exports.isSafeNumber = _isSafeNumber;
exports.isSafeString = _isSafeString;
exports.isSet = _isSet;
exports.isString = _isString;
exports.isSymbol = _isSymbol;
exports.isUndefined = _isUndefined;
exports.isUnfilled = _isUnfilled;
