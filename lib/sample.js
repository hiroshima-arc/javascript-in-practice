"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// テンプレートリテラル
var name = 'John Doe';
var message = "Hello, ".concat(name, "!");

// アロー関数
var add = function add(x, y) {
  return x + y;
};

// デフォルトパラメーター
function greet() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'World';
  console.log("Hello, ".concat(name, "!"));
}

// 分割代入
var person = {
  firstName: 'John',
  lastName: 'Doe'
};
var firstName = person.firstName,
  lastName = person.lastName;

// スプレッド演算子
var arr = [1, 2, 3];
var arrCopy = [].concat(arr);

// クラス
var Person = /*#__PURE__*/function () {
  function Person(firstName, lastName) {
    _classCallCheck(this, Person);
    this.firstName = firstName;
    this.lastName = lastName;
  }
  _createClass(Person, [{
    key: "getFullName",
    value: function getFullName() {
      return "".concat(this.firstName, " ").concat(this.lastName);
    }
  }]);
  return Person;
}();