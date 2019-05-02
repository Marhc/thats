import _isString from './_isString';

export default obj => {
  try {
    return _isString(obj) && !!JSON.parse(obj);
  } catch (e) {
    return false;
  }
};
