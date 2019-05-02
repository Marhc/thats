import _getProto from './_getProto';

export default obj => 'Null Undefined Boolean String Number Symbol'.indexOf(_getProto(obj)) > -1;
