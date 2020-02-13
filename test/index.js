var gOPDs = require('../cjs');

console.assert(typeof gOPDs === 'function');

delete Object.getOwnPropertyDescriptors;

delete require.cache[require.resolve('../cjs')];

gOPDs = require('../cjs');

var descriptor = gOPDs({get test() {}});

console.assert(!!descriptor.test.get);
