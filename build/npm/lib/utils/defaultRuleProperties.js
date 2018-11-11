"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultValueOptions = exports.defaultOperatorOptions = exports.defaultOperator = exports.defaultField = void 0;

var _immutable = _interopRequireDefault(require("immutable"));

var _map = _interopRequireDefault(require("lodash/map"));

var _range = _interopRequireDefault(require("lodash/range"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultField = function defaultField(config) {
  return typeof config.settings.defaultField === 'function' ? config.settings.defaultField(config) : config.settings.defaultField || Object.keys(config.fields)[0];
};

exports.defaultField = defaultField;

var defaultOperator = function defaultOperator(config, field) {
  return typeof config.settings.defaultOperator === 'function' ? config.settings.defaultOperator(field, config) : config.settings.defaultOperator || config.fields[field].operators[0];
};

exports.defaultOperator = defaultOperator;

var defaultOperatorOptions = function defaultOperatorOptions(config, operator) {
  return new _immutable.default.Map(config.operators[operator].options && config.operators[operator].options.defaults || {});
};

exports.defaultOperatorOptions = defaultOperatorOptions;

var defaultValueOptions = function defaultValueOptions(config, operator) {
  return new _immutable.default.List((0, _map.default)((0, _range.default)(0, config.operators[operator].cardinality), function () {
    return new _immutable.default.Map(config.operators[operator].valueOptions && config.operators[operator].valueOptions.defaults || {});
  }));
};

exports.defaultValueOptions = defaultValueOptions;

var _default = function _default(config) {
  var field = defaultField(config, field);
  var operator = defaultOperator(config, field);
  return new _immutable.default.Map({
    field: field,
    operator: operator,
    value: new _immutable.default.List(),
    operatorOptions: defaultOperatorOptions(config, operator),
    valueOptions: defaultValueOptions(config, operator)
  });
};

exports.default = _default;