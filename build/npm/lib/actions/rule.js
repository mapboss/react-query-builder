"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setValueOption = exports.setOperatorOption = exports.setValue = exports.setOperator = exports.setField = void 0;

var constants = _interopRequireWildcard(require("../constants"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {string} field
 */
var setField = function setField(config, path, field) {
  return {
    type: constants.SET_FIELD,
    path: path,
    field: field,
    config: config
  };
};
/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {string} operator
 */


exports.setField = setField;

var setOperator = function setOperator(config, path, operator) {
  return {
    type: constants.SET_OPERATOR,
    path: path,
    operator: operator,
    config: config
  };
};
/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {integer} delta
 * @param {*} value
 */


exports.setOperator = setOperator;

var setValue = function setValue(config, path, delta, value) {
  return {
    type: constants.SET_VALUE,
    path: path,
    delta: delta,
    value: value,
    config: config
  };
};
/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {string} name
 * @param {*} value
 */


exports.setValue = setValue;

var setOperatorOption = function setOperatorOption(config, path, name, value) {
  return {
    type: constants.SET_OPERATOR_OPTION,
    path: path,
    name: name,
    value: value,
    config: config
  };
};
/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {integer} delta
 * @param {string} name
 * @param {*} value
 */


exports.setOperatorOption = setOperatorOption;

var setValueOption = function setValueOption(config, path, delta, name, value) {
  return {
    type: constants.SET_VALUE_OPTION,
    path: path,
    delta: delta,
    name: name,
    value: value,
    config: config
  };
};

exports.setValueOption = setValueOption;