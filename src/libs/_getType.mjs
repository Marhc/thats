import _getProto from './_getProto'
import _isInteger from './_isInteger'
import _isInfinity from './_isInfinity'
import _isNumber from './_isNumber'
export default obj => {
    let res;
    if ( _isInteger( obj ) ) {
        res = 'Integer'
    } else if ( _isNumber(obj) && !obj) {
        res = 'NaN'
    } else if ( _isInfinity( obj ) ) {
        res = 'Infinity'
    } else if ( _isNumber(obj) ) {
        res = 'Float'
    } else {
        res = _getProto(obj)
    }
    return res
}
