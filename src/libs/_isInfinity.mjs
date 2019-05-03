import _isNumber from './_isNumber';
import { INF } from '../constants';

export default obj => _isNumber(obj) && Math.abs(obj) == INF;
