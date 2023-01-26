/**
 * @param {unknown} value
 * @returns {value is Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array}
 */
const isTypedArray = (value) => isTypedArray.integer(value) || isTypedArray.float(value) || isTypedArray.bigint(value);

/**
 * @param {unknown} value
 * @returns {value is Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array}
 */
isTypedArray.integer = (value) => isTypedArray.integer.signed(value) || isTypedArray.integer.unsigned(value);

/**
 * @param {unknown} value
 * @returns {value is Int8Array | Int16Array | Int32Array}
 */
isTypedArray.integer.signed = (value) => isTypedArray.integer.signed.int8(value) || isTypedArray.integer.signed.int16(value) || isTypedArray.integer.signed.int32(value);

/**
 * @param {unknown} value
 * @returns {value is Int8Array}
 */
isTypedArray.integer.signed.int8 = (value) => value instanceof Int8Array;

/**
 * @param {unknown} value
 * @returns {value is Int16Array}
 */
isTypedArray.integer.signed.int16 = (value) => value instanceof Int16Array;

/**
 * @param {unknown} value
 * @returns {value is Int32Array}
 */
isTypedArray.integer.signed.int32 = (value) => value instanceof Int32Array;

/**
 * @param {unknown} value
 * @returns {value is Uint8Array | Uint16Array | Uint32Array}
 */
isTypedArray.integer.unsigned = (value) => isTypedArray.integer.unsigned.uint8(value) || isTypedArray.integer.unsigned.uint16(value) || isTypedArray.integer.unsigned.uint32(value);

/**
 * @param {unknown} value
 * @returns {value is Uint8Array}
 */
isTypedArray.integer.unsigned.uint8 = (value) => value instanceof Uint8Array;

/**
 * @param {unknown} value
 * @returns {value is Uint16Array}
 */
isTypedArray.integer.unsigned.uint16 = (value) => value instanceof Uint16Array;

/**
 * @param {unknown} value
 * @returns {value is Uint32Array}
 */
isTypedArray.integer.unsigned.uint32 = (value) => value instanceof Uint32Array;

/**
 * @param {unknown} value
 * @returns {value is Float32Array | Float64Array}
 */
isTypedArray.float = (value) => isTypedArray.float.float32(value) || isTypedArray.float.float64(value);

/**
 * @param {unknown} value
 * @returns {value is Float32Array}
 */
isTypedArray.float.float32 = (value) => value instanceof Float32Array;

/**
 * @param {unknown} value
 * @returns {value is Float64Array}
 */
isTypedArray.float.float64 = (value) => value instanceof Float64Array;

/**
 * @param {unknown} value
 * @returns {value is BigInt64Array | BigUint64Array}
 */
isTypedArray.bigint = (value) => isTypedArray.bigint.int64(value) || isTypedArray.bigint.uint64(value);

/**
 * @param {unknown} value
 * @returns {value is BigInt64Array}
 */
isTypedArray.bigint.int64 = (value) => value instanceof BigInt64Array;

/**
 * @param {unknown} value
 * @returns {value is BigUint64Array}
 */
isTypedArray.bigint.uint64 = (value) => value instanceof BigUint64Array;

module.exports = isTypedArray;
