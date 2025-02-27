/**
 * Returns a string representing the type of the given value.
 * @param {any} value
 * @returns {string}
 */
const isInspect = function (value) {
    const datatype = isInspect.datatype(value);
    if (datatype !== 'object') return datatype;

    if (value === null) return 'null';
    if (value instanceof Date) return 'Date';
    if (value instanceof Buffer) return 'Buffer';

    if (value instanceof Set) {
        if (value.size === 0) return 'Set';
        const entryTypes = new Set();
        for (let entry of value.values()) {
            entryTypes.add(isInspect(entry));
        }
        return 'Set<' + Array.from(entryTypes.values()).sort().join('|') + '>';
    }

    if (value instanceof Map) {
        if (value.size === 0) return 'Map';
        const keyTypes = new Set(), entryTypes = new Set();
        for (let [key, entry] of value.entries()) {
            keyTypes.add(isInspect(key));
            entryTypes.add(isInspect(entry));
        }
        return 'Map<' + Array.from(keyTypes.values()).sort().join('|') + ',' + Array.from(entryTypes.values()).sort().join('|') + '>';
    }

    if (Array.isArray(value)) {
        if (value.length === 0) return 'Array';
        const entryTypes = new Set();
        for (let entry of value) {
            entryTypes.add(isInspect(entry));
        }
        return 'Array<' + Array.from(entryTypes.values()).sort().join('|') + '>';
    }

    if (value.__proto__ === Object.prototype) {
        const entries = Object.entries(value);
        if (entries.length === 0) return 'Object';
        const entryTypes = new Map();
        for (let [key, entry] of entries) {
            entryTypes.set(key, isInspect(entry));
        }
        return '{' + Array.from(entryTypes.entries()).map(([key, entry]) => key + ':' + entry).sort().join(',') + '}';
    }

    return isInspect.class(value);
};

isInspect.datatype = function (value) {
    return typeof value;
};

isInspect.class = function (value) {
    return value?.[Symbol.toStringTag] ?? value?.__proto__?.constructor?.name ?? (value ? 'Null' : null);
};

module.exports = isInspect;
