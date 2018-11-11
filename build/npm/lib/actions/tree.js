"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeGroup = exports.removeGroupOld = exports.addGroup = exports.addGroupOld = exports.removeRule = exports.removeRuleOld = exports.addRule = exports.setTree = void 0;

var _uuid = _interopRequireDefault(require("../utils/uuid"));

var _expandTreePath = _interopRequireDefault(require("../utils/expandTreePath"));

var _defaultRuleProperties = _interopRequireDefault(require("../utils/defaultRuleProperties"));

var _defaultGroupProperties = _interopRequireDefault(require("../utils/defaultGroupProperties"));

var constants = _interopRequireWildcard(require("../constants"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasChildren = function hasChildren(tree, path) {
  return tree.getIn((0, _expandTreePath.default)(path, 'children1')).size > 0;
};
/**
 * @param {object} config
 * @param {Immutable.Map} tree
 */


var setTree = function setTree(config, tree) {
  return {
    type: constants.SET_TREE,
    tree: tree
  };
};
/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {object} properties
 */


exports.setTree = setTree;

var addRule = function addRule(config, path, properties) {
  return {
    type: constants.ADD_RULE,
    path: path,
    id: (0, _uuid.default)(),
    properties: (0, _defaultRuleProperties.default)(config).merge(properties || {})
  };
};
/**
 * @param {object} config
 * @param {Immutable.List} path
 */


exports.addRule = addRule;

var removeRuleOld = function removeRuleOld(config, path) {
  return function (dispatch, getState) {
    dispatch({
      type: constants.REMOVE_RULE,
      path: path,
      config: config
    });

    var _getState = getState(),
        tree = _getState.tree;

    var parentPath = path.slice(0, -1);

    if (!hasChildren(tree, parentPath)) {
      dispatch(addRule(config, parentPath));
    }
  };
};
/**
 * @param {object} config
 * @param {Immutable.List} path
 */


exports.removeRuleOld = removeRuleOld;

var removeRule = function removeRule(config, path) {
  return {
    type: constants.REMOVE_RULE,
    path: path,
    config: config
  };
};
/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {object} properties
 */


exports.removeRule = removeRule;

var addGroupOld = function addGroupOld(config, path, properties) {
  return function (dispatch) {
    var groupUuid = (0, _uuid.default)();
    dispatch({
      type: constants.ADD_GROUP,
      path: path,
      id: groupUuid,
      properties: (0, _defaultGroupProperties.default)(config).merge(properties || {}),
      config: config
    });
    var groupPath = path.push(groupUuid);
    dispatch(addRule(config, groupPath));
    dispatch(addRule(config, groupPath));
  };
};
/**
 * @param {object} config
 * @param {Immutable.List} path
 * @param {object} properties
 */


exports.addGroupOld = addGroupOld;

var addGroup = function addGroup(config, path, properties) {
  return {
    type: constants.ADD_NEW_GROUP,
    path: path,
    properties: (0, _defaultGroupProperties.default)(config).merge(properties || {}),
    config: config
  };
};
/**
 * @param {object} config
 * @param {Immutable.List} path
 */


exports.addGroup = addGroup;

var removeGroupOld = function removeGroupOld(config, path) {
  return function (dispatch, getState) {
    dispatch({
      type: constants.REMOVE_GROUP,
      path: path,
      config: config
    });

    var _getState2 = getState(),
        tree = _getState2.tree;

    var parentPath = path.slice(0, -1);

    if (!hasChildren(tree, parentPath)) {
      dispatch(addRule(config, parentPath));
    }
  };
};
/**
 * @param {object} config
 * @param {Immutable.List} path
 */


exports.removeGroupOld = removeGroupOld;

var removeGroup = function removeGroup(config, path) {
  return {
    type: constants.REMOVE_GROUP,
    path: path,
    config: config
  };
};

exports.removeGroup = removeGroup;