/**
 * @param {any} value
 * @returns {value is boolean}
 */
const isBoolean = function isBoolean(value) {
    return typeof value === 'boolean';
};

/**
 * @param {any} value
 * @returns {value is boolean}
 */
isBoolean.true = function isTrue(value) {
    return value === true;
};

/**
 * @param {any} value
 * @returns {value is any}
 */
isBoolean.truthy = function isTruthy(value) {
    return !!value;
};

/**
 * @param {any} value
 * @returns {value is boolean}
 */
isBoolean.false = function isFalse(value) {
    return value === false;
};

/**
 * @param {any} value
 * @returns {value is null}
 */
isBoolean.falsy = function isFalsy(value) {
    return !value;
};

module.exports = isBoolean;
