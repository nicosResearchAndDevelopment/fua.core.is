/**
 * @param {unknown} value
 * @returns {value is number}
 */
const isNumber = (value) => typeof value === 'number';

/**
 * @param {unknown} value
 * @returns {value is NaN}
 */
isNumber.nan = (value) => isNumber(value) && Number.isNaN(value);

/**
 * @param {unknown} value
 * @returns {value is number}
 */
isNumber.float = (value) => isNumber(value) && !Number.isNaN(value);

/**
 * @param {unknown} value
 * @returns {value is number}
 */
isNumber.float.finite = (value) => isNumber.float(value) && Number.isFinite(value);

/**
 * @param {unknown} value
 * @returns {value is number}
 */
isNumber.integer = (value) => isNumber(value) && Number.isSafeInteger(value);

/**
 * @param {unknown} value
 * @returns {value is number}
 */
isNumber.integer.negative = (value) => isNumber.integer(value) && value < 0;

/**
 * @param {unknown} value
 * @returns {value is number}
 */
isNumber.integer.nonpositive = (value) => isNumber.integer(value) && value <= 0;

/**
 * @param {unknown} value
 * @returns {value is number}
 */
isNumber.integer.nonnegative = (value) => isNumber.integer(value) && value >= 0;

/**
 * @param {unknown} value
 * @returns {value is number}
 */
isNumber.integer.positive = (value) => isNumber.integer(value) && value > 0;

/**
 * @param {unknown} value
 * @returns {value is bigint}
 */
isNumber.bigint = (value) => typeof value === 'bigint';

const _0n = BigInt(0);

/**
 * @param {unknown} value
 * @returns {value is bigint}
 */
isNumber.bigint.negative = (value) => isNumber.bigint(value) && value < _0n;

/**
 * @param {unknown} value
 * @returns {value is bigint}
 */
isNumber.bigint.nonpositive = (value) => isNumber.bigint(value) && value <= _0n;

/**
 * @param {unknown} value
 * @returns {value is bigint}
 */
isNumber.bigint.nonnegative = (value) => isNumber.bigint(value) && value >= _0n;

/**
 * @param {unknown} value
 * @returns {value is bigint}
 */
isNumber.bigint.positive = (value) => isNumber.bigint(value) && value > _0n;

module.exports = isNumber;
