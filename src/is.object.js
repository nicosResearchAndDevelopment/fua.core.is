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
isObject.native = (value) => isObject(value) && value.__proto__ === Object.prototype;

/**
 * @param {unknown} value
 * @returns {value is object}
 */
isObject.instance = (value) => value instanceof Object;

const _keyTypes = ['number', 'string', 'symbol'];

/**
 * @param {unknown} value
 * @returns {value is number | string | symbol}
 */
isObject.key = (value) => _keyTypes.includes(typeof value);

module.exports = isObject;
