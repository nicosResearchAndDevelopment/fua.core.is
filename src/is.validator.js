/**
 * @param {(value: unknown) => boolean} checker
 * @returns {(value: unknown) => boolean}
 */
const isValidator = function (checker) {
    if (typeof checker !== 'function') throw new Error('invalid checker');
    return (value) => {
        try {
            return !!checker(value);
        } catch (err) {
            return false;
        }
    };
};

/**
 * @param {RegExp} pattern
 * @returns {(value: unknown) => value is string}
 */
isValidator.string = function (pattern) {
    if (!(pattern instanceof RegExp)) throw new Error('invalid pattern');
    return (value) => typeof value === 'string' && pattern.test(value);
};

/**
 * @template {any} T
 * @param {(value: unknown) => value is T} checker
 * @returns {(value: unknown) => value is Array<T>}
 */
isValidator.array = function (checker) {
    if (typeof checker !== 'function') throw new Error('invalid checker');
    return (value) => Array.isArray(value) && Array.prototype.every.call(value, checker);
};

/**
 * @template {Record<any, any>} T
 * @param {{[K in keyof T]: (value: unknown) => value is T[K]}} checkerObj
 * @returns {(value: unknown) => value is T}
 */
isValidator.object = function (checkerObj) {
    if (!checkerObj || typeof checkerObj !== 'object') throw new Error('invalid checkerObj');
    const checkerList = Object.entries(checkerObj)
    if (!checkerList.every(([key, checker]) => typeof checker === 'function')) throw new Error('invalid checkerObj');
    return (value) => !!value && typeof value === 'object' && checkerList.every(([key, checker]) => checker(value[key]));
};

/**
 * @template {any} T
 * @param {Array<T>} choices
 * @returns {(value: unknown) => value is T}
 */
isValidator.enum = function (choices) {
    if (!Array.isArray(choices)) throw new Error('invalid choices');
    return (value) => Array.prototype.includes.call(choices, value);
};

/**
 * @template {Object} T
 * @param {typeof T} classFunction
 * @returns {(value: unknown) => value is T}
 */
isValidator.instance = function (classFunction) {
    if (typeof classFunction !== 'function') throw new Error('invalid classFunction');
    return (value) => value instanceof classFunction;
};

const datatypes = ['undefined', 'boolean', 'number', 'bigint', 'string', 'symbol', 'object', 'function'];

/**
 * @template {any} T
 * @param {`${typeof T}`} datatype
 * @returns {(value: unknown) => value is T}
 */
isValidator.datatype = function (datatype) {
    if (!datatypes.includes(datatype)) throw new Error('invalid datatype');
    return (value) => typeof value === datatype;
};

/**
 * @template {any} T
 * @param {Array<(value: unknown) => value is (T & any)>} concatenations
 * @returns {(value: unknown) => value is T}
 */
isValidator.concatenation = function (concatenations) {
    if (!Array.isArray(concatenations)) throw new Error('invalid concatenations');
    if (!Array.prototype.every.call(concatenations, (value) => typeof value === 'function')) throw new Error('invalid concatenations');
    return (value) => Array.prototype.every.call(concatenations, validator => validator(value));
};

/**
 * @template {any} T
 * @param {Array<(value: unknown) => value is (T | any)>} alternatives
 * @returns {(value: unknown) => value is T}
 */
isValidator.alternative = function (alternatives) {
    if (!Array.isArray(alternatives)) throw new Error('invalid alternatives');
    if (!Array.prototype.every.call(alternatives, (value) => typeof value === 'function')) throw new Error('invalid alternatives');
    return (value) => Array.prototype.some.call(alternatives, validator => validator(value));
};

/**
 * @template {any} T
 * @param {(value: unknown) => value is T} validator
 * @returns {(value: unknown) => value is (T | null | undefined)}
 */
isValidator.optional = function (validator) {
    if (typeof validator !== 'function') throw new Error('invalid validator');
    return (value) => (value ?? null) === null || validator(value);
};

module.exports = isValidator;
