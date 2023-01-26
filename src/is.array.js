/**
 * @param {unknown} value
 * @returns {value is Array}
 */
const isArray = (value) => Array.isArray(value);

/**
 * @param {unknown} value
 * @returns {value is Array}
 */
isArray.nonempty = (value) => isArray(value) && value.length > 0;

/**
 * @param {unknown} value
 * @returns {value is Array<boolean>}
 */
isArray.booleans = (value) => isArray(value) && value.every(entry => typeof entry === 'boolean');

/**
 * @param {unknown} value
 * @returns {value is Array<boolean>}
 */
isArray.nonempty.booleans = (value) => isArray.nonempty(value) && value.every(entry => typeof entry === 'boolean');

/**
 * @param {unknown} value
 * @returns {value is Array<number>}
 */
isArray.numbers = (value) => isArray(value) && value.every(entry => typeof entry === 'number');

/**
 * @param {unknown} value
 * @returns {value is Array<number>}
 */
isArray.nonempty.numbers = (value) => isArray.nonempty(value) && value.every(entry => typeof entry === 'number');

/**
 * @param {unknown} value
 * @returns {value is Array<string>}
 */
isArray.strings = (value) => isArray(value) && value.every(entry => typeof entry === 'string');

/**
 * @param {unknown} value
 * @returns {value is Array<string>}
 */
isArray.nonempty.strings = (value) => isArray.nonempty(value) && value.every(entry => typeof entry === 'string');

module.exports = isArray;
