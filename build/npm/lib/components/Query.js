"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tree = _interopRequireDefault(require("../stores/tree"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _bindActionCreators = _interopRequireDefault(require("../utils/bindActionCreators"));

var actions = _interopRequireWildcard(require("../actions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var stringify = require('json-stringify-safe');

var ConnectedQuery =
/*#__PURE__*/
function (_Component) {
  _inherits(ConnectedQuery, _Component);

  function ConnectedQuery() {
    _classCallCheck(this, ConnectedQuery);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConnectedQuery).apply(this, arguments));
  }

  _createClass(ConnectedQuery, [{
    key: "render",
    value: function render() {
      //        console.log("In ConnectedQuery:render. state="+this.props.store.getState().toString()+" props="+stringify(this.props));
      //        console.log("get_children="+stringify(this.props.get_children));
      //        console.log("dispatch="+stringify(this.props.dispatch));
      var _this$props = this.props,
          config = _this$props.config,
          tree = _this$props.tree,
          get_children = _this$props.get_children,
          dispatch = _this$props.dispatch,
          props = _objectWithoutProperties(_this$props, ["config", "tree", "get_children", "dispatch"]);

      return _react.default.createElement("div", null, get_children({
        tree: tree,
        actions: (0, _bindActionCreators.default)(_objectSpread({}, actions.tree, actions.group, actions.rule), config, dispatch),
        config: config,
        dispatch: dispatch
      }));
    }
  }]);

  return ConnectedQuery;
}(_react.Component);

var QueryContainer = (0, _reactRedux.connect)(function (tree) {
  console.log("connect:State=" + tree.toString());
  return {
    tree: tree
  };
}
/*                                (dispatch, props) => {
                                    const { conjunctions, fields, operators, widgets, settings, children } = props;
                                    const config = { conjunctions, fields, operators, widgets, settings };
                                    return bindActionCreators({ ...actions.tree, ...actions.group, ...actions.rule }, config, dispatch);
                                  },*/
)(ConnectedQuery);

var Query =
/*#__PURE__*/
function (_Component2) {
  _inherits(Query, _Component2);

  function Query(props, context) {
    var _this;

    _classCallCheck(this, Query);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Query).call(this, props, context));
    var config = {
      conjunctions: props.conjunctions,
      fields: props.fields,
      operators: props.operators,
      widgets: props.widgets,
      settings: props.settings
    };
    var tree = (0, _tree.default)(config);
    _this.state = {
      store: (0, _redux.createStore)(tree)
    }; //    console.log("Query:constructor. state="+stringify(this.state.store.getState()));

    return _this;
  }

  _createClass(Query, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          conjunctions = _this$props2.conjunctions,
          fields = _this$props2.fields,
          operators = _this$props2.operators,
          widgets = _this$props2.widgets,
          settings = _this$props2.settings,
          children = _this$props2.children,
          get_children = _this$props2.get_children,
          props = _objectWithoutProperties(_this$props2, ["conjunctions", "fields", "operators", "widgets", "settings", "children", "get_children"]);

      var config = {
        conjunctions: conjunctions,
        fields: fields,
        operators: operators,
        widgets: widgets,
        settings: settings
      }; //    console.log("In Query:render. state="+stringify(this.state.store.getState())+" props="+stringify(this.props));
      //    console.log("children="+stringify(this.props.children));

      return _react.default.createElement(_reactRedux.Provider, {
        store: this.state.store
      }, _react.default.createElement(QueryContainer, {
        store: this.state.store,
        get_children: get_children,
        config: config
      }));
      return _react.default.createElement(_reactRedux.Provider, {
        store: this.state.store
      }, function () {
        return _react.default.createElement(_reactRedux.Connector, {
          select: function select(_ref) {
            var tree = _ref.tree;
            return {
              tree: tree
            };
          }
        }, function (_ref2) {
          var tree = _ref2.tree,
              dispatch = _ref2.dispatch;
          return children({
            tree: tree,
            actions: (0, _bindActionCreators.default)(_objectSpread({}, actions.tree, actions.group, actions.rule), config, dispatch),
            config: config
          });
        });
      });
    }
  }]);

  return Query;
}(_react.Component);

exports.default = Query;

_defineProperty(Query, "propTypes", {
  conjunctions: _propTypes.default.object.isRequired,
  fields: _propTypes.default.object.isRequired,
  operators: _propTypes.default.object.isRequired,
  widgets: _propTypes.default.object.isRequired,
  settings: _propTypes.default.object.isRequired
});