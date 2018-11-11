"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _function = _interopRequireDefault(require("react-pure-render/function"));

var _size = _interopRequireDefault(require("lodash/size"));

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

var _pickBy = _interopRequireDefault(require("lodash/pickBy"));

var _Widget = _interopRequireDefault(require("../Widget"));

var _Operator = _interopRequireDefault(require("../Operator"));

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

var _default = function _default(Rule) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(RuleContainer, _Component);

    function RuleContainer() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, RuleContainer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RuleContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldComponentUpdate", _function.default);

      return _this;
    }

    _createClass(RuleContainer, [{
      key: "removeSelf",
      value: function removeSelf() {
        this.props.actions.removeRule(this.props.path);
      }
    }, {
      key: "setField",
      value: function setField(field) {
        this.props.actions.setField(this.props.path, field);
      }
    }, {
      key: "setOperator",
      value: function setOperator(operator) {
        this.props.actions.setOperator(this.props.path, operator);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props$config = this.props.config,
            fields = _this$props$config.fields,
            operators = _this$props$config.operators; //      let fieldOptions = mapValues(fields, (item) => item.label);

        var fieldOptions = fields; // Add a special 'empty' option if no field has been selected yet.

        if ((0, _size.default)(fieldOptions) && typeof this.props.field === 'undefined') {
          fieldOptions = Object.assign({}, {
            ':empty:': 'Select a field'
          }, fieldOptions);
        }

        var operatorOptions = (0, _mapValues.default)((0, _pickBy.default)(operators, function (item, index) {
          return _this2.props.field && fields[_this2.props.field] && fields[_this2.props.field].operators.indexOf(index) !== -1;
        }), function (item) {
          return item.label;
        }); // Add a special 'empty' option if no operator has been selected yet.

        if ((0, _size.default)(operatorOptions) && typeof this.props.operator === 'undefined') {
          operatorOptions = Object.assign({}, {
            ':empty:': 'Select an operator'
          }, operatorOptions);
        }

        return _react.default.createElement(Rule, {
          id: this.props.id,
          removeSelf: this.removeSelf.bind(this),
          setField: this.setField.bind(this),
          setOperator: this.setOperator.bind(this),
          selectedField: this.props.field || ':empty:',
          selectedOperator: this.props.operator || ':empty:',
          fieldSeparator: this.props.config.settings.fieldSeparator || '*$.',
          fieldSeparatorDisplay: this.props.config.settings.fieldSeparatorDisplay || '=>',
          fieldOptions: fieldOptions,
          operatorOptions: operatorOptions
        }, typeof this.props.field !== 'undefined' && typeof this.props.operator !== 'undefined' ? [_react.default.createElement(_Operator.default, {
          key: "options",
          path: this.props.path,
          field: this.props.field,
          options: this.props.operatorOptions,
          operator: this.props.operator,
          actions: this.props.actions,
          config: this.props.config
        }), _react.default.createElement(_Widget.default, {
          key: "values",
          path: this.props.path,
          field: this.props.field,
          value: this.props.value,
          options: this.props.valueOptions,
          operator: this.props.operator,
          actions: this.props.actions,
          config: this.props.config
        })] : null);
      }
    }]);

    return RuleContainer;
  }(_react.Component), _defineProperty(_class, "propTypes", {
    config: _propTypes.default.object.isRequired,
    operator: _propTypes.default.string,
    field: _propTypes.default.string
  }), _temp;
};

exports.default = _default;