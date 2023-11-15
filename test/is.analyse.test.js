const
    expect           = require('expect'),
    {describe, test} = require('mocha'),
    analyse          = require('../src/is.analyse.js');

describe('fua.core.is.analyse', function () {

    test('develop', function () {
        // console.log(analyse);

        // console.log(analyse.class(0));
        // console.log(analyse.class(0n));
        // console.log(analyse.class(false));
        // console.log(analyse.class(NaN));
        // console.log(analyse.class(''));
        // console.log(analyse.class(Symbol()));
        // console.log(analyse.class(null));
        // console.log(analyse.class(undefined));
        // console.log(analyse.class(() => null));
        // console.log(analyse.class(class {
        // }));
        // console.log(analyse.class({}));
        // console.log(analyse.class(Object.create(null)));
        // console.log(analyse.class(Object.create({})));
        // console.log(analyse.class(new (class {
        // })()));
        // console.log(analyse.class(new (class Test {
        // })()));
        // console.log(analyse.class(new (Test = class {
        // })()));
    });

    test('datatype', function () {
        expect(analyse.datatype(undefined)).toBe('undefined');
        expect(analyse.datatype({})).toBe('object');
        expect(analyse.datatype([])).toBe('object');
        expect(analyse.datatype(Object.create(null))).toBe('object');
        expect(analyse.datatype(123)).toBe('number');
        expect(analyse.datatype(String(123))).toBe('string');
        expect(analyse.datatype(new String(123))).toBe('object');
    });

    test('class', function () {
        expect(analyse.class('test')).toBe('String');
        expect(analyse.class(NaN)).toBe('Number');
        // expect(analyse.class(Buffer.from('test'))).toBe('Uint8Array');
        expect(analyse.class(new Set())).toBe('Set');
        expect(analyse.class(new Map())).toBe('Map');
        expect(analyse.class(new Date())).toBe('Date');
        expect(analyse.class([])).toBe('Array');
        expect(analyse.class({})).toBe('Object');
        expect(analyse.class(Object.create(null))).toBe('Null');
        expect(analyse.class(() => null)).toBe('Function');
        expect(analyse.class(class {
        })).toBe('Function');
        expect(analyse.class(new (class Test {
        })())).toBe('Test');
        expect(analyse.class(new (class {
        })())).toBe('');
        expect(analyse.class(undefined)).toBe(null);
        expect(analyse.class(null)).toBe(null);
    });

});
