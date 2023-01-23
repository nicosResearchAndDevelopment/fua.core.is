/**
 * @param {any} value
 * @returns {value is string}
 */
const isString = function isString(value) {
    return typeof value === 'string';
};

/**
 * @param {any} value
 * @returns {value is string}
 */
isString.nonempty = function isNonEmptyString(value) {
    return isString(value) && value.length > 0;
};

module.exports = isString;
