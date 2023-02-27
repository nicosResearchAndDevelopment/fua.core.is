/**
 * @param {unknown} value
 * @returns {value is Date}
 */
const isDate = (value) => value instanceof Date;

/**
 * @param {unknown} value
 * @returns {value is Date}
 */
isDate.valid = (value) => isDate(value) && !Number.isNaN(value.getTime());

/**
 * @param {unknown} value
 * @returns {value is number}
 */
isDate.valid.value = (value) => typeof value === 'number' && value >= -8640000000000000 && value <= 8640000000000000;

const dateStringRegex = /^(?:[+-]\d{2})?\d{4}-(?:0\d|1[012])-(?:[012]\d|3[01])(?:T(?:[01]\d|2[0123]):[012345]\d|:[012345]\d(?:\.\d+)?(?:Z|[+-])?(?:[01]\d|2[0123]):[012345]\d)?$/;

/**
 * @param {unknown} value
 * @returns {value is string}
 */
isDate.valid.string = (value) => typeof value === 'string' && dateStringRegex.test(value);

module.exports = isDate;
