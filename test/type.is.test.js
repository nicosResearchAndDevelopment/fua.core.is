const
    expect = require('expect'),
    {describe, test} = require('mocha'),
    is = require('../src/type.is.js');

describe('fua.core.type.is', function () {

    test.skip('develop', function () {
        console.log(is);
    });

    describe('function', function () {

        test.only('develop', function () {

            const examples = [{
                name: 'anonymous function',
                type: 'method',
                value: function () {
                }
            }, {
                name: 'object function',
                type: 'method',
                value() {
                }
            }, {
                name: 'named function',
                type: 'method',
                value: function test() {
                }
            }, {
                name: 'arrow function',
                type: 'method',
                value: () => null
            }, {
                name: 'anonymous class function',
                type: 'class',
                value: class {
                }
            }, {
                name: 'named class function',
                type: 'class',
                value: class Test {
                }
            }, {
                name: 'Array',
                type: 'class',
                value: Array
            }, {
                name: 'Array.from',
                type: 'method',
                value: Array.from
            }, {
                name: 'Array.prototype.constructor',
                type: 'class',
                value: Array.prototype.constructor
            }, {
                name: 'Array.prototype.forEach',
                type: 'method',
                value: Array.prototype.forEach
            }, {
                name: 'Buffer',
                type: 'class',
                value: Buffer
            }, {
                name: 'Buffer.from',
                type: 'method',
                value: Buffer.from
            }, {
                name: 'Buffer.alloc',
                type: 'method',
                value: Buffer.alloc
            }, {
                name: 'Buffer.isEncoding',
                type: 'method',
                value: Buffer.isEncoding
            }, {
                name: 'Buffer.from.bind(Buffer)',
                type: 'method',
                value: Buffer.from.bind(Buffer)
            }, {
                name: 'Error',
                type: 'class',
                value: Error
            }, {
                name: 'Date',
                type: 'class',
                value: Date
            }, {
                name: 'Date.now',
                type: 'method',
                value: Date.now
            }, {
                name: 'console.log',
                type: 'method',
                value: console.log
            }, {
                name: 'http.Server',
                type: 'class',
                value: require('http').Server
            }, {
                name: 'http.createServer',
                type: 'method',
                value: require('http').createServer
            }, {
                name: 'http.request',
                type: 'method',
                value: require('http').request
            }, {
                name: 'Promise',
                type: 'class',
                value: Promise
            }, {
                name: 'Promise.prototype.then',
                type: 'method',
                value: Promise.prototype.then
            }, {
                name: 'old school class function',
                type: 'class',
                value: (() => {
                    function Test(value) {
                        this.value = value
                    }

                    // Object.defineProperty(Test, 'arguments', {get() {}});

                    Test.prototype.test = function () {
                        return this.value;
                    };

                    return Test;
                })()
            }, {
                name: 'old school class function method',
                type: 'method',
                value: (() => {
                    function Test(value) {
                        this.value = value
                    }

                    Test.prototype.test = function test(pre, post) {
                        return pre + this.value + post;
                    };

                    return Test.prototype.test;
                })()
            }, {
                name: 'String',
                type: 'class',
                value: String
            }, {
                name: 'String.prototype.toString',
                type: 'method',
                value: String.prototype.toString
            }, {
                name: 'Number',
                type: 'class',
                value: Number
            }, {
                name: 'Number.isInteger',
                type: 'method',
                value: Number.isInteger
            }, {
                name: 'isNaN',
                type: 'method',
                value: isNaN
            }, {
                name: 'URL',
                type: 'class',
                value: require('url').URL
            }, {
                name: 'Blob',
                type: 'class',
                value: Blob
            }];

            const output = [];
            for (let {name, type, value} of examples) {
                // const isFunction = is.function(value);
                // const hasPrototype = isFunction && Object.hasOwn(value, 'prototype');
                // const hasArguments = isFunction && Object.hasOwn(value, 'arguments');
                // const isMethod = isFunction && (!hasPrototype || hasArguments);
                // const isClass = isFunction && hasPrototype && !hasArguments;
                // const isClass = isFunction && !isMethod;
                // const isClass = isFunction && /^_?[A-Z]/.test(value.name);
                // const isMethod = isFunction && !isClass;
                // const detected = isMethod ? 'method' : isClass ? 'class' : 'none';
                // if (type === detected) continue;
                // console.log(name, Reflect.ownKeys(value));
                if (is.function.method(value) && type === 'method') continue;
                if (is.function.class(value) && type === 'class') continue;
                output.push({name, type});
            }
            console.table(output);

            // console.log(Buffer.prototype.constructor);
            // console.log(Buffer.from.prototype.constructor);

            // console.log(new Buffer('test'));
            // console.log(Buffer.from('test'));
            // console.log(new Buffer.from('test'));
            // console.log(Buffer.isEncoding('utf-8'));
            // console.log(new Buffer.isEncoding('utf-8'));
            // console.log(Array.from('test'));
            // console.log(new Array.from('test'));
            // console.log((new Array('test')).at(0));

        });

    });

});
