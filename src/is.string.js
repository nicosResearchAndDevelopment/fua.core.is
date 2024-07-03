/**
 * @param {unknown} value
 * @returns {value is string}
 */
const isString = (value) => typeof value === 'string';

/**
 * @param {unknown} value
 * @returns {value is string}
 */
isString.nonempty = (value) => isString(value) && value.length > 0;

/**
 * @param {unknown} value
 * @returns {value is string}
 */
isString.token = (value) => isString(value) && /^\S+$/.test(value);

const datatypes = ['undefined', 'boolean', 'number', 'bigint', 'string', 'symbol', 'object', 'function'];

/**
 * @param {unknown} value
 * @returns {value is string}
 */
isString.datatype = (value) => isString(value) && datatypes.includes(value);

module.exports = isString;
