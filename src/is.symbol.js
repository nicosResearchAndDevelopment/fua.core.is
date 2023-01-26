/**
 * @param {unknown} value
 * @returns {value is symbol}
 */
const isSymbol = (value) => typeof value === 'symbol';

const _nativeSymbols = Reflect.ownKeys(Symbol).map(key => Symbol[key]);

/**
 * @param {unknown} value
 * @returns {value is symbol}
 */
isSymbol.native = (value) => isSymbol(value) && _nativeSymbols.includes(value);

module.exports = isSymbol;
