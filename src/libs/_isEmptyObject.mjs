import _getProto from './_getProto'
export default obj => _getProto(obj) == 'Object' && Object.keys(obj).length === 0
