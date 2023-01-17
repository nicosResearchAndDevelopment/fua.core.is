const is = exports;

//region >> NULL

is.undefined = function (value) {
    return value === undefined;
};

is.defined = function (value) {
    return !is.undefined(value);
};

is.null = function (value) {
    return (value ?? null) === null;
};

is.notnull = function (value) {
    return !is.null(value);
};

//endregion >> NULL
//region >> BOOLEAN

is.boolean = function (value) {
    return typeof value === 'boolean';
};

is.boolean.true = function (value) {
    return value === true;
};

is.boolean.truthy = function (value) {
    return !!value;
};

is.boolean.false = function (value) {
    return value === false;
};

is.boolean.falsy = function (value) {
    return !value;
};

//endregion >> BOOLEAN
//region >> NUMBER

is.number = function (value) {
    return typeof value === 'number';
};

is.number.float = function (value) {
    return is.number(value) && !Number.isNaN(value);
};

is.number.float.finite = function (value) {
    return is.number.float(value) && Number.isFinite(value);
};

is.number.integer = function (value) {
    return is.number(value) && Number.isSafeInteger(value);
};

is.number.integer.negative = function (value) {
    return is.number.integer(value) && value < 0;
};

is.number.integer.nonpositive = function (value) {
    return is.number.integer(value) && value <= 0;
};

is.number.integer.nonnegative = function (value) {
    return is.number.integer(value) && value >= 0;
};

is.number.integer.positive = function (value) {
    return is.number.integer(value) && value > 0;
};

is.number.bigint = function (value) {
    return typeof value === 'bigint';
};

is.number.bigint.negative = function (value) {
    return is.number.bigint(value) && value < 0n;
};

is.number.bigint.nonpositive = function (value) {
    return is.number.bigint(value) && value <= 0n;
};

is.number.bigint.nonnegative = function (value) {
    return is.number.bigint(value) && value >= 0n;
};

is.number.bigint.positive = function (value) {
    return is.number.bigint(value) && value > 0n;
};

//endregion >> NUMBER
//region >> STRING

is.string = function (value) {
    return typeof value === 'string';
};

is.string.nonempty = function (value) {
    return is.string(value) && value.length > 0;
};

//endregion >> STRING
//region >> SYMBOL

is.symbol = function (value) {
    return typeof value === 'symbol';
};

const nativeSymbols = Reflect.ownKeys(Symbol).map(key => Symbol[key]);

is.symbol.native = function (value) {
    return is.symbol(value) && nativeSymbols.includes(value);
};

//endregion >> SYMBOL
//region >> FUNCTION

is.function = function (value) {
    return typeof value === 'function';
};

is.function.anonymous = function (value) {
    return is.function(value) && !value.name;
};

is.function.named = function (value) {
    return is.function(value) && !!value.name;
};

is.function.named.method = function (value) {
    return is.function.named(value) && /^_?[a-z]/.test(value.name);
};

is.function.named.class = function (value) {
    return is.function.named(value) && /^_?[A-Z]/.test(value.name);
};

is.function.instantiable = function (value) {
    return is.function(value) && Object.hasOwn(value, 'prototype');
};

//endregion >> FUNCTION
//region >> OBJECT

is.object = function (value) {
    return value && typeof value === 'object';
};

is.object.nonempty = function (value) {
    return is.object(value) && Object.keys(value).length > 0;
};

is.object.iterable = function () {
    return is.object(value) && is.function(value[Symbol.iterator]);
};

//endregion >> OBJECT
//region >> ARRAY

is.array = function (value) {
    return Array.isArray(value);
};

is.array.nonempty = function (value) {
    return is.array(value) && value.length > 0;
};

//endregion >> ARRAY
//region >> TYPEDARRAY

is.typedarray = function (value) {
    return ArrayBuffer.isView(value) && !(value instanceof DataView);
};

is.typedarray.int8 = function (value) {
    return value instanceof Int8Array;
};

is.typedarray.int16 = function (value) {
    return value instanceof Int16Array;
};

is.typedarray.int32 = function (value) {
    return value instanceof Int32Array;
};

is.typedarray.int = function (value) {
    return is.typedarray.int8(value) ||
        is.typedarray.int16(value) ||
        is.typedarray.int32(value);
};

is.typedarray.uint8 = function (value) {
    return value instanceof Uint8Array;
};

is.typedarray.uint16 = function (value) {
    return value instanceof Uint16Array;
};

is.typedarray.uint32 = function (value) {
    return value instanceof Uint32Array;
};

is.typedarray.uint = function (value) {
    return is.typedarray.uint8(value) ||
        is.typedarray.uint16(value) ||
        is.typedarray.uint32(value);
};

is.typedarray.float32 = function (value) {
    return value instanceof Float32Array;
};

is.typedarray.float64 = function (value) {
    return value instanceof Float64Array;
};

is.typedarray.float = function (value) {
    return is.typedarray.float32(value) ||
        is.typedarray.float64(value);
};

is.typedarray.bigint = function (value) {
    return value instanceof BigInt64Array;
};

is.typedarray.biguint = function (value) {
    return value instanceof BigUint64Array;
};

//endregion >> TYPEDARRAY
//region >> ANY

is.date = function (value) {
    return value instanceof Date;
};

is.error = function (value) {
    return value instanceof Error;
};

is.buffer = function (value) {
    return Buffer.isBuffer(value);
};

//endregion >> ANY

module.exports = is;
