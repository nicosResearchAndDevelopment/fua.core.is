/**
 * @param {unknown} value
 * @returns {value is boolean}
 */
const isBoolean = (value) => typeof value === 'boolean';

/**
 * @param {unknown} value
 * @returns {value is boolean}
 */
isBoolean.true = (value) => value === true;

/**
 * @param {unknown} value
 * @returns {value is any}
 */
isBoolean.truthy = (value) => !!value;

/**
 * @param {unknown} value
 * @returns {value is boolean}
 */
isBoolean.false = (value) => value === false;

/**
 * @param {unknown} value
 * @returns {value is null}
 */
isBoolean.falsy = (value) => !value;

module.exports = isBoolean;
