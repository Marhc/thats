import _getProto from './_getProto';

export default obj => _getProto(obj) == 'Array' && !obj.length;
