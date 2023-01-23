/**
 * @param {any} value
 * @returns {value is Array}
 */
const isArray = function isArray(value) {
    return Array.isArray(value);
};

/**
 * @param {any} value
 * @returns {value is Array}
 */
isArray.nonempty = function isNonEmptyArray(value) {
    return isArray(value) && value.length > 0;
};

module.exports = isArray;
