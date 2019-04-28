import _isNumber from './_isNumber'
export default obj => _isNumber(obj) && (obj%1)===0
