"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(actionCreators, config, dispatch) {
  return (0, _mapValues.default)(actionCreators, function (actionCreator) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return dispatch(actionCreator.apply(void 0, [config].concat(args)));
    };
  });
};

exports.default = _default;