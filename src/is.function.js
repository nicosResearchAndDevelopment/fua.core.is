/**
 * @param {unknown} value
 * @returns {value is function}
 */
const isFunction = (value) => typeof value === 'function';

/**
 * @param {unknown} value
 * @returns {value is function}
 */
isFunction.anonymous = (value) => isFunction(value) && !value.name;

/**
 * @param {unknown} value
 * @returns {value is function}
 */
isFunction.named = (value) => isFunction(value) && !!value.name;

/**
 * @param {unknown} value
 * @returns {value is function}
 */
isFunction.named.method = (value) => isFunction.named(value) && /^_?[a-z]/.test(value.name);

/**
 * @param {unknown} value
 * @returns {value is function}
 */
isFunction.named.class = (value) => isFunction.named(value) && /^_?[A-Z]/.test(value.name);

/**
 * @param {unknown} value
 * @returns {value is function}
 */
isFunction.instantiable = (value) => isFunction(value) && Object.hasOwn(value, 'prototype') && value === value.prototype.constructor;

/**
 * @param {unknown} value
 * @returns {value is function}
 */
isFunction.lambda = (value) => isFunction(value) && value.toString().startsWith('(');

/**
 * @param {unknown} value
 * @returns {value is function}
 */
isFunction.regular = (value) => isFunction(value) && value.toString().startsWith('function');

/**
 * @param {unknown} value
 * @returns {value is function}
 */
isFunction.class = (value) => isFunction(value) && value.toString().startsWith('class');

module.exports = isFunction;
