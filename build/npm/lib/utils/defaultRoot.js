"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getChild = void 0;

var _immutable = _interopRequireDefault(require("immutable"));

var _uuid = _interopRequireDefault(require("./uuid"));

var _defaultRuleProperties = _interopRequireDefault(require("./defaultRuleProperties"));

var _defaultGroupProperties = _interopRequireDefault(require("./defaultGroupProperties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getChild = function getChild(id, config) {
  return _defineProperty({}, id, new _immutable.default.Map({
    type: 'rule',
    id: id,
    properties: (0, _defaultRuleProperties.default)(config)
  }));
};

exports.getChild = getChild;

var _default = function _default(config) {
  return new _immutable.default.Map({
    type: 'group',
    id: (0, _uuid.default)(),
    children1: new _immutable.default.OrderedMap(_objectSpread({}, getChild((0, _uuid.default)(), config), getChild((0, _uuid.default)(), config))),
    properties: (0, _defaultGroupProperties.default)(config)
  });
};

exports.default = _default;