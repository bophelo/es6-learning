'use strict';

var _TaskCollection = require('./TaskCollection');

var _TaskCollection2 = _interopRequireDefault(_TaskCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//importing the default as well as foo

console.log(_TaskCollection.foo);

new _TaskCollection2.default(['Prepare Resume', 'Finish Code Repo migration', 'Code some more']).dump();