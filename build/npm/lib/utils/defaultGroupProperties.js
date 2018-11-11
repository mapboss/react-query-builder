"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultConjunction = void 0;

var _immutable = _interopRequireDefault(require("immutable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultConjunction = function defaultConjunction(config) {
  return config.settings.defaultConjunction || Object.keys(config.conjunctions)[0];
};

exports.defaultConjunction = defaultConjunction;

var _default = function _default(config) {
  return new _immutable.default.Map({
    conjunction: defaultConjunction(config)
  });
};

exports.default = _default;