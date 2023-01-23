/**
 * @param {any} value
 * @returns {value is symbol}
 */
const isSymbol = function isSymbol(value) {
    return typeof value === 'symbol';
};

const _nativeSymbols = Reflect.ownKeys(Symbol).map(key => Symbol[key]);

/**
 * @param {any} value
 * @returns {value is symbol}
 */
isSymbol.native = function isNativeSymbol(value) {
    return isSymbol(value) && _nativeSymbols.includes(value);
};

module.exports = isSymbol;
