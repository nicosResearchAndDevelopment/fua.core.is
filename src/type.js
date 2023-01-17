const type = exports;

type.is = require('./type.is.js');
type.assert = require('./type.assert.js');
type.convert = require('./type.convert.js');
type.xsd = require('./type.xsd.js');

module.exports = _freezeDeep(type);

/**
 * @template T
 * @param {T} target
 * @returns {Readonly<T>}
 * @private
 */
function _freezeDeep(target) {
    Object.freeze(target);
    for (const key of Object.keys(target)) {
        if (target[key] instanceof Object) _freezeDeep(target[key]);
    }
    return target;
}
