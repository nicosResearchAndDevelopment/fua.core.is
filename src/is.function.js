/**
 * @param {any} value
 * @returns {value is function}
 */
const isFunction = function isFunction(value) {
    return typeof value === 'function';
};

/**
 * @param {any} value
 * @returns {value is function}
 */
isFunction.anonymous = function isAnonymousFunction(value) {
    return isFunction(value) && !value.name;
};

/**
 * @param {any} value
 * @returns {value is function}
 */
isFunction.named = function isNamedFunction(value) {
    return isFunction(value) && !!value.name;
};

/**
 * @param {any} value
 * @returns {value is function}
 */
isFunction.named.method = function isMethodNamedFunction(value) {
    return isFunction.named(value) && /^_?[a-z]/.test(value.name);
};

/**
 * @param {any} value
 * @returns {value is function}
 */
isFunction.named.class = function isClassNamedFunction(value) {
    return isFunction.named(value) && /^_?[A-Z]/.test(value.name);
};

/**
 * @param {any} value
 * @returns {value is function}
 */
isFunction.instantiable = function isInstantiableFunction(value) {
    return isFunction(value) && Object.hasOwn(value, 'prototype') && value === value.prototype.constructor;
};

/**
 * @param {any} value
 * @returns {value is function}
 */
isFunction.lambda = function isLambdaFunction(value) {
    return isFunction(value) && value.toString().startsWith('(');
};

/**
 * @param {any} value
 * @returns {value is function}
 */
isFunction.regular = function isRegularFunction(value) {
    return isFunction(value) && value.toString().startsWith('function');
};

/**
 * @param {any} value
 * @returns {value is function}
 */
isFunction.class = function isClass(value) {
    return isFunction(value) && value.toString().startsWith('class');
};

module.exports = isFunction;
