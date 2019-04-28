var _getProto = (function (obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
});

var _isNumber = (function (obj) {
  return typeof obj == 'number';
});

var _isInteger = (function (obj) {
  return _isNumber(obj) && obj % 1 === 0;
});

var _isInfinity = (function (obj) {
  return _isNumber(obj) && Math.abs(obj) == Infinity;
});

var _getType = (function (obj) {
  var res;

  if (_isInteger(obj)) {
    res = 'Integer';
  } else if (_isNumber(obj) && !obj) {
    res = 'NaN';
  } else if (_isInfinity(obj)) {
    res = 'Infinity';
  } else if (_isNumber(obj)) {
    res = 'Float';
  } else {
    res = _getProto(obj);
  }

  return res;
});

var _isArray = (function (obj) {
  return _getProto(obj) == 'Array';
});

var _isBoolean = (function (obj) {
  return typeof obj == 'boolean';
});

var _isDate = (function (obj) {
  return _getProto(obj) == 'Date';
});

var _isDefined = (function (obj) {
  return !(obj == null);
});

var _isEmpty = (function (obj) {
  return obj == '';
});

var _isEmptyArray = (function (obj) {
  return _getProto(obj) == 'Array' && !obj.length;
});

var _isEmptyObject = (function (obj) {
  return _getProto(obj) == 'Object' && Object.keys(obj).length === 0;
});

var _isEmptyString = (function (obj) {
  return obj === '';
});

var _isError = (function (obj) {
  return _getProto(obj) == 'Error';
});

var _isFalse = (function (obj) {
  return !obj;
});

var _isFloat = (function (obj) {
  return _isNumber(obj) && !!obj && Math.abs(obj) != Infinity && obj % 1 !== 0;
});

var _isFunction = (function (obj) {
  return typeof obj == 'function';
});

var _isString = (function (obj) {
  return typeof obj == 'string';
});

var _isJson = (function (obj) {
  try {
    return _isString(obj) && !!JSON.parse(obj);
  } catch (e) {
    return false;
  }
});

var _isMap = (function (obj) {
  return _getProto(obj) == 'Map';
});

var _isNan = (function (obj) {
  return _isNumber(obj) && obj != obj;
});

var _isNil = (function (obj) {
  return obj == null;
});

var _isNull = (function (obj) {
  return obj === null;
});

var _isObject = (function (obj) {
  return _getProto(obj) == 'Object';
});

var _isPrimitive = (function (obj) {
  return 'Null Undefined Boolean String Number Symbol'.indexOf(_getProto(obj)) > -1;
});

var _isPromise = (function (obj) {
  return _getProto(obj) == 'Promise';
});

var _isRegexp = (function (obj) {
  return _getProto(obj) == 'RegExp';
});

var _isSafeNumber = (function (obj) {
  return _isNumber(obj) && obj == obj && Math.abs(obj) != Infinity;
});

var _isSafeString = (function (obj) {
  return _isString(obj) && obj !== '';
});

var _isSet = (function (obj) {
  return _getProto(obj) == 'Set';
});

var _isSymbol = (function (obj) {
  return _getProto(obj) == 'Symbol';
});

var _isUndefined = (function (obj) {
  return obj === undefined;
});

var _isUnfilled = (function (obj) {
  return obj == null || obj === '';
});

export { _getProto as getProto, _getType as getType, _isArray as isArray, _isBoolean as isBoolean, _isDate as isDate, _isDefined as isDefined, _isEmpty as isEmpty, _isEmptyArray as isEmptyArray, _isEmptyObject as isEmptyObject, _isEmptyString as isEmptyString, _isError as isError, _isFalse as isFalse, _isFloat as isFloat, _isFunction as isFunction, _isInfinity as isInfinity, _isInteger as isInteger, _isJson as isJson, _isMap as isMap, _isNan as isNan, _isNil as isNil, _isNull as isNull, _isNumber as isNumber, _isObject as isObject, _isPrimitive as isPrimitive, _isPromise as isPromise, _isRegexp as isRegexp, _isSafeNumber as isSafeNumber, _isSafeString as isSafeString, _isSet as isSet, _isString as isString, _isSymbol as isSymbol, _isUndefined as isUndefined, _isUnfilled as isUnfilled };
