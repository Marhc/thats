'use strict';

var _getProto = (obj => Object.prototype.toString.call(obj).slice(8, -1));

var _isInteger = (obj => typeof obj == 'number' && obj % 1 === 0);

var _isInfinity = (obj => typeof obj == 'number' && Math.abs(obj) == Infinity);

var _getType = (obj => {
  let res;

  if (_isInteger(obj)) {
    res = 'Integer';
  } else if (typeof obj == 'number' && !obj) {
    res = 'NaN';
  } else if (_isInfinity(obj)) {
    res = 'Infinity';
  } else if (typeof obj == 'number') {
    res = 'Float';
  } else {
    res = _getProto(obj);
  }

  return res;
});

var _isArray = (obj => _getProto(obj) == 'Array');

var _isBoolean = (obj => typeof obj == 'boolean');

var _isDate = (obj => _getProto(obj) == 'Date');

var _isDefined = (obj => !(obj == null));

var _isEmpty = (obj => obj == '');

var _isEmptyArray = (obj => _getProto(obj) == 'Array' && !obj.length);

var _isEmptyObject = (obj => _getProto(obj) == 'Object' && Object.keys(obj).length === 0);

var _isEmptyString = (obj => obj === '');

var _isError = (obj => _getProto(obj) == 'Error');

var _isFalse = (obj => !obj);

var _isFloat = (obj => typeof obj == 'number' && !!obj && Math.abs(obj) != Infinity && obj % 1 !== 0);

var _isFunction = (obj => typeof obj == 'function');

var _isSafeString = (obj => typeof obj == 'string' && obj !== '');

var _isJson = (obj => {
  if (!_isSafeString(obj)) return false;

  try {
    return (res => !!res && typeof res == 'object')(JSON.parse(obj));
  } catch (e) {
    return false;
  }
});

var _isMap = (obj => _getProto(obj) == 'Map');

var _isNan = (obj => typeof obj == 'number' && obj !== obj);

var _isNil = (obj => obj == null);

var _isNull = (obj => obj === null);

var _isNumber = (obj => typeof obj == 'number');

var _isObject = (obj => _getProto(obj) == 'Object');

var _isPrimitive = (obj => 'Null Undefined Boolean String Number Symbol'.indexOf(_getProto(obj)) > -1);

var _isPromise = (obj => _getProto(obj) == 'Promise');

var _isRegexp = (obj => _getProto(obj) == 'RegExp');

var _isSafeNumber = (obj => typeof obj == 'number' && obj == obj && Math.abs(obj) != Infinity);

var _isSet = (obj => _getProto(obj) == 'Set');

var _isString = (obj => typeof obj == 'string');

var _isSymbol = (obj => typeof obj == 'symbol');

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
