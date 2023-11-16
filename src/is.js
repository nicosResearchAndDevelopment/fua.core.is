const is = {};

is.validator = require('./is.validator.js');

is.boolean    = require('./is.boolean.js');
is.number     = require('./is.number.js');
is.string     = require('./is.string.js');
is.symbol     = require('./is.symbol.js');
is.function   = require('./is.function.js');
is.object     = require('./is.object.js');
is.array      = require('./is.array.js');
is.typedarray = require('./is.typedarray.js');
is.date       = require('./is.date.js');

/**
 * @param {unknown} value
 * @returns {value is undefined}
 */
is.undefined = (value) => value === undefined;

/**
 * @param {unknown} value
 * @returns {value is !undefined}
 */
is.defined = (value) => !is.undefined(value);

/**
 * @param {unknown} value
 * @returns {value is null | undefined}
 */
is.null = (value) => (value ?? null) === null;

/**
 * @param {unknown} value
 * @returns {value is !(null | undefined)}
 */
is.notnull = (value) => !is.null(value);

/**
 * @param {unknown} value
 * @returns {value is boolean | number | string}
 */
is.primitive = (value) => is.boolean(value) || is.number(value) || is.string(value);

(function freeze(target) {
    Object.freeze(target);
    Object.values(target)
        .filter(value => value instanceof Object)
        .forEach(freeze);
})(is);
module.exports = is;
