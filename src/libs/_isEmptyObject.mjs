import _getProto from './_getProto';
import { OBJ } from '../constants';

export default obj => _getProto(obj) == OBJ && Object.keys(obj).length === 0;
