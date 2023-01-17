const assert = function (value, errMsg = '', ErrType = Error) {
    if (!value) _throwError(assert, ErrType, errMsg);
};

// TODO

function _throwError(source, ErrType, ...args) {
    const err = new ErrType(...args);
    Error.captureStackTrace(err, source);
    throw err;
}
