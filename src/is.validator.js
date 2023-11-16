const isValidator = function (checker) {
    if (typeof checker !== 'function') throw new Error('invalid checker');
    return (value) => {
        try {
            return !!checker(value);
        } catch (err) {
            return false;
        }
    };
};

isValidator.string = function (pattern) {
    if (!(pattern instanceof RegExp)) throw new Error('invalid pattern');
    return (value) => typeof value === 'string' && pattern.test(value);
};

isValidator.array = function (checker) {
    if (typeof checker !== 'function') throw new Error('invalid checker');
    return (value) => Array.isArray(value) && Array.prototype.every.call(value, checker);
};

isValidator.enum = function (choices) {
    if (!Array.isArray(choices)) throw new Error('invalid choices');
    return (value) => Array.prototype.includes.call(choices, value);
};

isValidator.instance = function (classFunction) {
    if (typeof classFunction !== 'function') throw new Error('invalid classFunction');
    return (value) => value instanceof classFunction;
};

const datatypes      = ['undefined', 'boolean', 'number', 'bigint', 'string', 'symbol', 'object', 'function'];
isValidator.datatype = function (datatype) {
    if (!datatypes.includes(datatype)) throw new Error('invalid datatype');
    return (value) => typeof value === datatype;
};

isValidator.concatenation = function (concatenations) {
    if (!Array.isArray(concatenations)) throw new Error('invalid concatenations');
    if (!Array.prototype.every.call(concatenations, (value) => typeof value === 'function')) throw new Error('invalid concatenations');
    return (value) => Array.prototype.every.call(concatenations, validator => validator(value));
};

isValidator.alternative = function (alternatives) {
    if (!Array.isArray(alternatives)) throw new Error('invalid alternatives');
    if (!Array.prototype.every.call(alternatives, (value) => typeof value === 'function')) throw new Error('invalid alternatives');
    return (value) => Array.prototype.some.call(alternatives, validator => validator(value));
};

isValidator.optional = function (validator) {
    if (typeof validator !== 'function') throw new Error('invalid validator');
    return (value) => (value ?? null) === null || validator(value);
};

module.exports = isValidator;
