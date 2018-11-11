"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _function = _interopRequireDefault(require("react-pure-render/function"));

var _map = _interopRequireDefault(require("lodash/map"));

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ComplexQuery =
/*#__PURE__*/
function (_Component) {
  _inherits(ComplexQuery, _Component);

  function ComplexQuery() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ComplexQuery);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ComplexQuery)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldComponentUpdate", _function.default);

    return _this;
  }

  _createClass(ComplexQuery, [{
    key: "handleOperatorSelect",
    value: function handleOperatorSelect() {
      var node = _react.default.findDOMNode(this.refs.operator);

      this.props.setOption('operator', node.value);
    }
  }, {
    key: "render",
    value: function render() {
      var selectedOperator = this.props.options.get('operator');
      var operatorOptions = (0, _map.default)((0, _mapValues.default)(this.props.operators, function (item) {
        return item.label;
      }), function (label, value) {
        return _react.default.createElement("option", {
          key: value,
          value: value
        }, label);
      });

      if (operatorOptions.length && typeof selectedOperator === 'undefined') {
        operatorOptions.unshift(_react.default.createElement("option", {
          key: ":empty:",
          value: ":empty:"
        }, "Select an operator"));
      }

      return _react.default.createElement("div", {
        className: "value-options--COMPLEX-QUERY"
      }, operatorOptions.length ? _react.default.createElement("div", {
        key: "operator",
        className: "rule--operator"
      }, _react.default.createElement("label", null, "Operator"), _react.default.createElement("select", {
        ref: "operator",
        value: selectedOperator || ':empty:',
        onChange: this.handleOperatorSelect.bind(this)
      }, operatorOptions)) : null);
    }
  }]);

  return ComplexQuery;
}(_react.Component);

exports.default = ComplexQuery;

_defineProperty(ComplexQuery, "propTypes", {
  setOption: _propTypes.default.func.isRequired
});