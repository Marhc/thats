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

export {
  _getProto as getProto,
  _getType as getType,
  _isArray as isArray,
  _isBoolean as isBoolean,
  _isDate as isDate,
  _isDefined as isDefined,
  _isEmpty as isEmpty,
  _isEmptyArray as isEmptyArray,
  _isEmptyObject as isEmptyObject,
  _isEmptyString as isEmptyString,
  _isError as isError,
  _isFalse as isFalse,
  _isFloat as isFloat,
  _isFunction as isFunction,
  _isInfinity as isInfinity,
  _isInteger as isInteger,
  _isJson as isJson,
  _isMap as isMap,
  _isNan as isNan,
  _isNil as isNil,
  _isNull as isNull,
  _isNumber as isNumber,
  _isObject as isObject,
  _isPrimitive as isPrimitive,
  _isPromise as isPromise,
  _isRegexp as isRegexp,
  _isSafeNumber as isSafeNumber,
  _isSafeString as isSafeString,
  _isSet as isSet,
  _isString as isString,
  _isSymbol as isSymbol,
  _isUndefined as isUndefined,
  _isUnfilled as isUnfilled,
};
