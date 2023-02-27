const
    util = require('./util.js'),
    is = {};

is.boolean = require('./is.boolean.js');
is.number = require('./is.number.js');
is.string = require('./is.string.js');
is.symbol = require('./is.symbol.js');
is.function = require('./is.function.js');
is.object = require('./is.object.js');
is.array = require('./is.array.js');
is.typedarray = require('./is.typedarray.js');

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

/**
 * @param {unknown} value
 * @returns {value is Date}
 */
is.date = (value) => value instanceof Date;

/**
 * @param {unknown} value
 * @returns {value is Date}
 */
is.date.valid = (value) => is.date(value) && !Number.isNaN(value.getTime());

/**
 * @param {unknown} value
 * @returns {value is Error}
 */
is.error = (value) => value instanceof Error;

/**
 * @param {unknown} value
 * @returns {value is Buffer}
 */
is.buffer = (value) => Buffer.isBuffer(value);

util.sealModule(is);
module.exports = is;
