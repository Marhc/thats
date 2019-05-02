const _getProto = obj => Object.prototype.toString.call(obj).slice(8, -1);

const _isNumber = obj => typeof obj == 'number';

const _isInteger = obj => _isNumber(obj) && obj % 1 === 0;

const _isInfinity = obj => _isNumber(obj) && Math.abs(obj) == Infinity;

const _getType = obj => {
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
};

const _isArray = obj => obj instanceof Array;

const _isBoolean = obj => typeof obj == 'boolean';

const _isDate = obj => obj instanceof Date;

const _isDefined = obj => !(obj == null);

const _isEmpty = obj => obj == '';

const _isEmptyArray = obj => _getProto(obj) == 'Array' && !obj.length;

const _isEmptyObject = obj => _getProto(obj) == 'Object' && Object.keys(obj).length === 0;

const _isEmptyString = obj => obj === '';

const _isError = obj => obj instanceof Error;

const _isFalse = obj => !obj;

const _isFloat = obj => _isNumber(obj) && !!obj && Math.abs(obj) != Infinity && obj % 1 !== 0;

const _isFunction = obj => typeof obj == 'function';

const _isString = obj => typeof obj == 'string';

const _isJson = obj => {
  try {
    return _isString(obj) && !!JSON.parse(obj);
  } catch (e) {
    return false;
  }
};

const _isMap = obj => obj instanceof Map;

const _isNan = obj => _isNumber(obj) && obj != obj;

const _isNil = obj => obj == null;

const _isNull = obj => obj === null;

const _isObject = obj => _getProto(obj) == 'Object';

const _isPrimitive = obj => 'Null Undefined Boolean String Number Symbol'.indexOf(_getProto(obj)) > -1;

const _isPromise = obj => obj instanceof Promise;

const _isRegexp = obj => obj instanceof RegExp;

const _isSafeNumber = obj => _isNumber(obj) && obj == obj && Math.abs(obj) != Infinity;

const _isSafeString = obj => _isString(obj) && obj !== '';

const _isSet = obj => obj instanceof Set;

const _isSymbol = obj => _getProto(obj) == 'Symbol';

const _isUndefined = obj => obj === undefined;

const _isUnfilled = obj => obj == null || obj === '';

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
