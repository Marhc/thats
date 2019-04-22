module.exports = obj => {
	if (!(typeof obj == 'string' && obj !== '')) return false;
    try {
        return (res => !!res && typeof res == 'object')(JSON.parse(obj));
    } catch (e) {
        return false;        
    }
}
