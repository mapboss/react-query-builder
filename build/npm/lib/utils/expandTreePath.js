"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @param {Immutable.List} path
 * @param {...string} suffix
 */
var _default = function _default(path) {
  for (var _len = arguments.length, suffix = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    suffix[_key - 1] = arguments[_key];
  }

  return path.interpose('children1').withMutations(function (list) {
    list.skip(1);
    list.push.apply(list, suffix);
    return list;
  });
};

exports.default = _default;