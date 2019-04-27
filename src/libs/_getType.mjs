import _getProto from './_getProto'
import _isInteger from './_isInteger'
import _isInfinity from './_isInfinity'
export default obj => {
    let res;
    if ( _isInteger( obj ) ) {
        res = 'Integer'
    } else if (typeof obj =='number' && !obj) {
        res = 'NaN'
    } else if ( _isInfinity( obj ) ) {
        res = 'Infinity'
    } else if (typeof obj =='number') {
        res = 'Float'
    } else {
        res = _getProto(obj)
    }
    return res
}
