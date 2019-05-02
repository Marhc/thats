import _isNumber from './_isNumber';

export default obj => _isNumber(obj) && Math.abs(obj) == Infinity;
