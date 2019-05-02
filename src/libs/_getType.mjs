import _getProto from './_getProto';
import _isInteger from './_isInteger';
import _isInfinity from './_isInfinity';
import _isNumber from './_isNumber';

export default obj => {
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
