"use strict";

var _sample_es = _interopRequireDefault(require("./sample_es5"));
var _sample_es2 = _interopRequireDefault(require("./sample_es6"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
console.log((0, _sample_es["default"])('ES5'));
var g = new _sample_es2["default"]('ES6');
g.say();