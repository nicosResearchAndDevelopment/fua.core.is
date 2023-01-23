const is = {};

is.boolean = require('./is.boolean.js');
is.number = require('./is.number.js');
is.string = require('./is.string.js');
is.symbol = require('./is.symbol.js');
is.function = require('./is.function.js');
is.object = require('./is.object.js');
is.array = require('./is.array.js');
is.typedarray = require('./is.typedarray.js');

/**
 * @param {any} value
 * @returns {boolean}
 */
is.undefined = function isUndefined(value) {
    return value === undefined;
};

/**
 * @param {any} value
 * @returns {boolean}
 */
is.defined = function isDefined(value) {
    return !is.undefined(value);
};

/**
 * @param {any} value
 * @returns {boolean}
 */
is.null = function isNull(value) {
    return (value ?? null) === null;
};

/**
 * @param {any} value
 * @returns {boolean}
 */
is.notnull = function isNotNull(value) {
    return !is.null(value);
};

/**
 * @param {any} value
 * @returns {boolean}
 */
is.date = function isDate(value) {
    return value instanceof Date;
};

/**
 * @param {any} value
 * @returns {boolean}
 */
is.error = function isError(value) {
    return value instanceof Error;
};

/**
 * @param {any} value
 * @returns {boolean}
 */
is.buffer = function isBuffer(value) {
    return Buffer.isBuffer(value);
};

module.exports = is;

(function seal(target) {
    Object.freeze(target);
    for (const child of Object.values(target)) {
        if (child instanceof Object) seal(child);
    }
})(module.exports);
