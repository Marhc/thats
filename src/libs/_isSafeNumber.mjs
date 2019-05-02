import _isNumber from './_isNumber';

export default obj => _isNumber(obj) && obj == obj && Math.abs(obj) != Infinity;
