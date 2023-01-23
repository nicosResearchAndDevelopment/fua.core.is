/**
 * @param {any} value
 * @returns {value is TypedArray}
 */
const isTypedArray = function isTypedArray(value) {
    // return ArrayBuffer.isView(value) && !(value instanceof DataView);
    return isTypedArray.integer(value)
        || isTypedArray.float(value)
        || isTypedArray.bigint(value);
};

/**
 * @param {any} value
 * @returns {value is TypedArray}
 */
isTypedArray.integer = function isIntegerArray(value) {
    return isTypedArray.integer.signed(value)
        || isTypedArray.integer.unsigned(value);
};

/**
 * @param {any} value
 * @returns {value is TypedArray}
 */
isTypedArray.integer.signed = function isSignedIntegerArray(value) {
    return isTypedArray.integer.signed.int8(value)
        || isTypedArray.integer.signed.int16(value)
        || isTypedArray.integer.signed.int32(value);
};

/**
 * @param {any} value
 * @returns {value is Int8Array}
 */
isTypedArray.integer.signed.int8 = function isInt8Array(value) {
    return value instanceof Int8Array;
};

/**
 * @param {any} value
 * @returns {value is Int16Array}
 */
isTypedArray.integer.signed.int16 = function isInt16Array(value) {
    return value instanceof Int16Array;
};

/**
 * @param {any} value
 * @returns {value is Int32Array}
 */
isTypedArray.integer.signed.int32 = function isInt32Array(value) {
    return value instanceof Int32Array;
};

/**
 * @param {any} value
 * @returns {value is TypedArray}
 */
isTypedArray.integer.unsigned = function isUnsignedIntegerArray(value) {
    return isTypedArray.integer.unsigned.uint8(value)
        || isTypedArray.integer.unsigned.uint16(value)
        || isTypedArray.integer.unsigned.uint32(value);
};

/**
 * @param {any} value
 * @returns {value is Uint8Array}
 */
isTypedArray.integer.unsigned.uint8 = function isUint8Array(value) {
    return value instanceof Uint8Array;
};

/**
 * @param {any} value
 * @returns {value is Uint16Array}
 */
isTypedArray.integer.unsigned.uint16 = function isUint16Array(value) {
    return value instanceof Uint16Array;
};

/**
 * @param {any} value
 * @returns {value is Uint32Array}
 */
isTypedArray.integer.unsigned.uint32 = function isUint32Array(value) {
    return value instanceof Uint32Array;
};

/**
 * @param {any} value
 * @returns {value is TypedArray}
 */
isTypedArray.float = function isFloatArray(value) {
    return isTypedArray.float.float32(value)
        || isTypedArray.float.float64(value);
};

/**
 * @param {any} value
 * @returns {value is Float32Array}
 */
isTypedArray.float.float32 = function isFloat32Array(value) {
    return value instanceof Float32Array;
};

/**
 * @param {any} value
 * @returns {value is Float64Array}
 */
isTypedArray.float.float64 = function isFloat64Array(value) {
    return value instanceof Float64Array;
};

/**
 * @param {any} value
 * @returns {value is TypedArray}
 */
isTypedArray.bigint = function isBigIntArray(value) {
    return isTypedArray.bigint.int64(value)
        || isTypedArray.bigint.uint64(value);
};

/**
 * @param {any} value
 * @returns {value is BigInt64Array}
 */
isTypedArray.bigint.int64 = function isBigInt64Array(value) {
    return value instanceof BigInt64Array;
};

/**
 * @param {any} value
 * @returns {value is BigUint64Array}
 */
isTypedArray.bigint.uint64 = function isBigUint64Array(value) {
    return value instanceof BigUint64Array;
};

module.exports = isTypedArray;
