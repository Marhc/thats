export default obj => typeof obj == 'number' && !!obj && Math.abs(obj) != Infinity && (obj%1)!==0
