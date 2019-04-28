var thats = (function (exports) {
    'use strict';

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

    return exports;

}({}));
