"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setConjunction = void 0;

var constants = _interopRequireWildcard(require("../constants"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {string} conjunction
 */
var setConjunction = function setConjunction(config, path, conjunction) {
  return {
    type: constants.SET_CONJUNCTION,
    path: path,
    conjunction: conjunction
  };
};

exports.setConjunction = setConjunction;