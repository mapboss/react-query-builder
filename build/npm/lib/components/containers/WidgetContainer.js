"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _immutable = _interopRequireDefault(require("immutable"));

var _function = _interopRequireDefault(require("react-pure-render/function"));

var _range = _interopRequireDefault(require("lodash/range"));

var _Delta = _interopRequireDefault(require("../Delta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(Widget) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WidgetContainer, _Component);

    function WidgetContainer() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, WidgetContainer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WidgetContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldComponentUpdate", _function.default);

      return _this;
    }

    _createClass(WidgetContainer, [{
      key: "setValue",
      value: function setValue(delta, value) {
        this.props.actions.setValue(this.props.path, delta, value);
      }
    }, {
      key: "setValueOption",
      value: function setValueOption(delta, name, value) {
        this.props.actions.setValueOption(this.props.path, delta, name, value);
      }
    }, {
      key: "renderOptions",
      value: function renderOptions(delta) {
        var _this2 = this;

        var operatorDefinitions = this.props.config.operators[this.props.operator];

        if (typeof operatorDefinitions.valueOptions === 'undefined') {
          return null;
        }

        var _operatorDefinitions$ = operatorDefinitions.valueOptions,
            optionsFactory = _operatorDefinitions$.factory,
            optionsProps = _objectWithoutProperties(_operatorDefinitions$, ["factory"]);

        return optionsFactory(Object.assign({}, optionsProps, {
          config: this.props.config,
          field: this.props.field,
          operator: this.props.operator,
          delta: delta,
          options: this.props.options.get(delta + '', new _immutable.default.Map()),
          setOption: function setOption(name, value) {
            return _this2.setValueOption.call(_this2, delta, name, value);
          }
        }));
      }
    }, {
      key: "renderWidget",
      value: function renderWidget(delta) {
        var _this3 = this;

        var fieldDefinition = this.props.config.fields[this.props.field];

        var _this$props$config$wi = this.props.config.widgets[fieldDefinition.widget],
            widgetFactory = _this$props$config$wi.factory,
            widgetProps = _objectWithoutProperties(_this$props$config$wi, ["factory"]);

        return widgetFactory(Object.assign({}, widgetProps, {
          config: this.props.config,
          field: this.props.field,
          operator: this.props.operator,
          delta: delta,
          value: this.props.value.get(delta),
          setValue: function setValue(value) {
            return _this3.setValue.call(_this3, delta, value);
          }
        }));
      }
    }, {
      key: "render",
      value: function render() {
        var _this4 = this;

        var fieldDefinition = this.props.config.fields[this.props.field];
        var operatorDefinition = this.props.config.operators[this.props.operator];

        if (typeof fieldDefinition === 'undefined' || typeof operatorDefinition === 'undefined') {
          return null;
        }

        var widgetDefinition = this.props.config.widgets[fieldDefinition.widget];

        if (typeof widgetDefinition === 'undefined') {
          return null;
        }

        var cardinality = operatorDefinition.cardinality || 1;

        if (cardinality === 0) {
          return null;
        }

        if (typeof widgetBehavior === 'undefined') {
          return _react.default.createElement(Widget, {
            name: fieldDefinition.widget
          }, (0, _range.default)(0, cardinality).map(function (delta) {
            return _react.default.createElement(_Delta.default, {
              key: delta,
              delta: delta
            }, _this4.renderWidget.call(_this4, delta), _this4.renderOptions.call(_this4, delta));
          }));
        } // @todo Implement custom widget behavior rendering.
        // const widget = widgetFactory({
        //   definition: widgetDefinition,
        //   config: this.props.config,
        //   field: this.props.field,
        //   cardinality: cardinality,
        //   value: this.props.value,
        //   setValue: this.setValue.bind(this)
        // }, delta => this.props.operator.valueOptions ? this.props.operator.valueOptions.factory({
        //   definition: this.props.operator,
        //   config: this.props.config,
        //   field: this.props.field,
        //   delta: delta,
        //   options: this.props.valueOptions.get(delta),
        //   setOption: (name, value) => this.setValueOption.call(this, delta, name, value)
        // }) : null);


        return null;
      }
    }]);

    return WidgetContainer;
  }(_react.Component), _defineProperty(_class, "propTypes", {
    config: _propTypes.default.object.isRequired,
    path: _propTypes.default.instanceOf(_immutable.default.List).isRequired,
    value: _propTypes.default.instanceOf(_immutable.default.List).isRequired,
    field: _propTypes.default.string.isRequired,
    operator: _propTypes.default.string.isRequired
  }), _temp;
};

exports.default = _default;