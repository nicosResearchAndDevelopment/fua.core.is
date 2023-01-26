/**
 * @param {unknown} value
 * @returns {value is object}
 */
const isObject = (value) => value && typeof value === 'object';

/**
 * @param {unknown} value
 * @returns {value is object}
 */
isObject.nonempty = (value) => isObject(value) && Object.keys(value).length > 0;

/**
 * @param {unknown} value
 * @returns {value is object}
 */
isObject.iterable = (value) => isObject(value) && typeof value[Symbol.iterator] === 'function';

/**
 * @param {unknown} value
 * @returns {value is object}
 */
isObject.instance = (value) => value instanceof Object;

module.exports = isObject;
