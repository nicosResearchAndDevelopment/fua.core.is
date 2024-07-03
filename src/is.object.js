/**
 * @param {unknown} value
 * @returns {value is object}
 */
const isObject = (value) => value && typeof value === 'object';

const _keyTypes = ['number', 'string', 'symbol'];

/**
 * @param {unknown} value
 * @returns {value is number | string | symbol}
 */
isObject.key = (value) => _keyTypes.includes(typeof value);

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

/**
 * @param {unknown} value
 * @returns {value is Error}
 */
isObject.instance.error = (value) => value instanceof Error;

/**
 * @param {unknown} value
 * @returns {value is Buffer}
 */
isObject.instance.buffer = (value) => value instanceof Buffer;

/**
 * @param {unknown} value
 * @returns {value is Set}
 */
isObject.instance.set = (value) => value instanceof Set;

/**
 * @param {unknown} value
 * @returns {value is Map}
 */
isObject.instance.map = (value) => value instanceof Map;

/**
 * @param {unknown} value
 * @returns {value is RegExp}
 */
isObject.instance.regex = (value) => value instanceof RegExp;

module.exports = isObject;
