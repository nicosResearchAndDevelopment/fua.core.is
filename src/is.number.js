/**
 * @param {any} value
 * @returns {value is number}
 */
const isNumber = function isNumber(value) {
    return typeof value === 'number';
};

/**
 * @param {any} value
 * @returns {value is number}
 */
isNumber.float = function isFloat(value) {
    return isNumber(value) && !Number.isNaN(value);
};

/**
 * @param {any} value
 * @returns {value is number}
 */
isNumber.float.finite = function isFiniteFloat(value) {
    return isNumber.float(value) && Number.isFinite(value);
};

/**
 * @param {any} value
 * @returns {value is number}
 */
isNumber.integer = function isInteger(value) {
    return isNumber(value) && Number.isSafeInteger(value);
};

/**
 * @param {any} value
 * @returns {value is number}
 */
isNumber.integer.negative = function isNegativeInteger(value) {
    return isNumber.integer(value) && value < 0;
};

/**
 * @param {any} value
 * @returns {value is number}
 */
isNumber.integer.nonpositive = function isNonPositiveInteger(value) {
    return isNumber.integer(value) && value <= 0;
};

/**
 * @param {any} value
 * @returns {value is number}
 */
isNumber.integer.nonnegative = function isNonNegativeInteger(value) {
    return isNumber.integer(value) && value >= 0;
};

/**
 * @param {any} value
 * @returns {value is number}
 */
isNumber.integer.positive = function isPositiveInteger(value) {
    return isNumber.integer(value) && value > 0;
};

/**
 * @param {any} value
 * @returns {value is bigint}
 */
isNumber.bigint = function isBigInt(value) {
    return typeof value === 'bigint';
};

/**
 * @param {any} value
 * @returns {value is bigint}
 */
isNumber.bigint.negative = function isNegativeBigInt(value) {
    return isNumber.bigint(value) && value < 0n;
};

/**
 * @param {any} value
 * @returns {value is bigint}
 */
isNumber.bigint.nonpositive = function isNonPositiveBigInt(value) {
    return isNumber.bigint(value) && value <= 0n;
};

/**
 * @param {any} value
 * @returns {value is bigint}
 */
isNumber.bigint.nonnegative = function isNonNegativeBigInt(value) {
    return isNumber.bigint(value) && value >= 0n;
};

/**
 * @param {any} value
 * @returns {value is bigint}
 */
isNumber.bigint.positive = function isPositiveBigInt(value) {
    return isNumber.bigint(value) && value > 0n;
};

module.exports = isNumber;
