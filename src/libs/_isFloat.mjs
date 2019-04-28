import _isNumber from './_isNumber'
export default obj => _isNumber(obj) && !!obj && Math.abs(obj) != Infinity && (obj%1)!==0
