/**
 * @param {any} value
 * @returns {value is object}
 */
const isObject = function isObject(value) {
    return value && typeof value === 'object';
};

/**
 * @param {any} value
 * @returns {value is object}
 */
isObject.nonempty = function isNonEmptyObject(value) {
    return isObject(value) && Object.keys(value).length > 0;
};

/**
 * @param {any} value
 * @returns {value is object}
 */
isObject.iterable = function isIterableObject(value) {
    return isObject(value) && typeof value[Symbol.iterator] === 'function';
};

/**
 * @param {any} value
 * @returns {value is object}
 */
isObject.instance = function isObjectInstance(value) {
    return value instanceof Object;
};

module.exports = isObject;
