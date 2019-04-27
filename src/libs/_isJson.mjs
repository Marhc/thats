import _isSafeString from './_isSafeString'
export default obj => {
	if ( !_isSafeString( obj ) ) return false;
    try {
        return (res => !!res && typeof res == 'object')(JSON.parse(obj));
    } catch (e) {
        return false;        
    }
}
