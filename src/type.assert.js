const is = require('./type.is.js');

const assert = function (value, errMsg = '', ErrType = Error) {
    if (!value) _throwErr(assert, ErrType, errMsg);
    return assert;
};

assert.boolean = function (value) {
    if (!is.boolean(value)) _throwErr(assert.number, TypeError, 'expected to be a boolean');
    return assert;
};

assert.number = function (value, min = -Infinity, max = Infinity) {
    if (!is.number(value)) _throwErr(assert.number, TypeError, 'expected to be a number',);
    if (value < min) _throwErr(assert.number, Error, 'expected to be at minimum ' + min);
    if (value > max) _throwErr(assert.number, Error, 'expected to be at maximum ' + max);
    return assert;
};

assert.number.integer = function (value, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    if (!is.number.integer(value)) _throwErr(assert.number.integer, TypeError, 'expected to be an integer',);
    if (value < min) _throwErr(assert.number.integer, Error, 'expected to be at minimum ' + min);
    if (value > max) _throwErr(assert.number.integer, Error, 'expected to be at maximum ' + max);
    return assert;
};

assert.string = function (value, pattern, min = 0, max = Number.MAX_SAFE_INTEGER) {
    if (!is.string(value)) _throwErr(assert.string, TypeError, 'expected to be a string');
    if (pattern && !pattern.test(value)) _throwErr(assert.string, Error, 'expected to match pattern ' + pattern);
    if (value.length < min) _throwErr(assert.string, Error, 'expected to have minimum length of ' + min);
    if (value > max) _throwErr(assert.string, Error, 'expected to have maximum length of ' + max);
    return assert;
};

assert.function = function (value) {
    if (!is.function(value)) _throwErr(assert.function, TypeError, 'expected to be a function')
    return assert;
};

assert.object = function (value, checkObj) {
    if (!is.object(value)) _throwErr(assert.object, TypeError, 'expected to be an object');
    if (checkObj) {
        for (const [key, checkFn] of Object.entries(checkObj)) {
            if (!checkFn(value[key], key)) _throwErr(assert.object, Error, 'expected entry "' + key + '" is invalid');
        }
    }
    return assert;
};

assert.instance = function (value, ...classFns) {
    if (!classFns.some(classFn => value instanceof classFn))
        _throwErr(assert.instance, TypeError, 'expected to be instance of ' + classFns.map(classFn => classFn.name).join(' or '));
    return assert;
};

assert.array = function (value, checkFn, min = 0, max = Number.MAX_SAFE_INTEGER) {
    if (!is.array(value)) _throwErr(assert.array, TypeError, 'expected to be an array')
    if (checkFn) for (let i = 0; i < value.length; i++) {
        if (!checkFn(value[i], i)) _throwErr(assert.array, Error, 'expected entry [' + i + '] is invalid');
    }
    if (value.length < min) _throwErr(assert.array, Error, 'expected to have minimum length of ' + min);
    if (value > max) _throwErr(assert.array, Error, 'expected to have maximum length of ' + max);
    return assert;
};

function _throwErr(source, ErrType, ...args) {
    const err = new ErrType(...args);
    Error.captureStackTrace(err, source);
    throw err;
}

module.exports = assert;
