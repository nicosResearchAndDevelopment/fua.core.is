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

module.exports = isString;
