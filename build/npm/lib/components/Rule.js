"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _function = _interopRequireDefault(require("react-pure-render/function"));

var _map = _interopRequireDefault(require("lodash/map"));

var _size = _interopRequireDefault(require("lodash/size"));

var _RuleContainer = _interopRequireDefault(require("./containers/RuleContainer"));

var _reactDdMenu = _interopRequireWildcard(require("react-dd-menu"));

var _reactBootstrap = require("react-bootstrap");

var _keys = _interopRequireDefault(require("lodash/keys"));

var _pickBy = _interopRequireDefault(require("lodash/pickBy"));

var _omitBy = _interopRequireDefault(require("lodash/omitBy"));

var _mapKeys = _interopRequireDefault(require("lodash/mapKeys"));

var _class, _temp, _class2;

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

require('react-dd-menu/dist/react-dd-menu.css');

var stringify = require('json-stringify-safe');

var Rule = (_temp = _class = (0, _RuleContainer.default)(_class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Rule, _Component);

  function Rule(props) {
    var _this;

    _classCallCheck(this, Rule);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rule).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldComponentUpdate", _function.default);

    _this.state = {
      isFieldOpen: false,
      curField: _this.props.selectedField
    };
    return _this;
  }

  _createClass(Rule, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isFieldOpen: !this.state.isFieldOpen
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        isFieldOpen: false
      });
    }
  }, {
    key: "handleFieldSelect1",
    value: function handleFieldSelect1() {
      var node = _reactDom.default.findDOMNode(this.refs.field);

      this.props.setField(node.value);
    }
  }, {
    key: "handleFieldSelect",
    value: function handleFieldSelect(label, value) {
      //    console.log("Field clicked. Label="+label+" value="+value);
      this.props.setField(value);
      this.setState({
        curField: label
      });
    }
  }, {
    key: "handleOperatorSelect",
    value: function handleOperatorSelect() {
      var node = _reactDom.default.findDOMNode(this.refs.operator); //    console.log("In handleOperatorSelect. value="+this.refs.operator.getValue());


      this.props.setOperator(this.refs.operator.getValue());
    }
  }, {
    key: "getFieldMenu",
    value: function getFieldMenu(fields, prefix) {
      var _this2 = this;

      if (prefix === undefined) {
        prefix = '';
      } else {
        prefix = prefix + this.props.fieldSeparator;
      }

      var direct_fields = (0, _omitBy.default)(fields, function (value, key) {
        return key.indexOf(_this2.props.fieldSeparator) > -1;
      });
      return (0, _keys.default)(direct_fields).map(function (field) {
        if (fields[field].widget == "submenu") {
          //            console.log("Got submenu for field "+field);
          var child_fields = (0, _pickBy.default)(fields, function (value, key) {
            return key.startsWith(field + _this2.props.fieldSeparator);
          }); //            console.log("child_fields before mapKeys="+stringify(child_fields));

          child_fields = (0, _mapKeys.default)(child_fields, function (value, key) {
            return key.substring(field.length + _this2.props.fieldSeparator.length);
          }); //            console.log("child_fields="+stringify(child_fields));

          return _react.default.createElement(_reactDdMenu.NestedDropdownMenu, {
            key: prefix + field,
            toggle: _react.default.createElement("a", {
              href: "#"
            }, fields[field].label),
            direction: "right",
            animate: false,
            delay: 0
          }, _this2.getFieldMenu(child_fields, prefix + field));
        } else {
          //            console.log("Got single field. prefix="+prefix+" field="+field+" entire field="+stringify(fields[field]));
          var short_label;

          if (fields[field].label.lastIndexOf(_this2.props.fieldSeparator) >= 0) {
            short_label = fields[field].label.substring(fields[field].label.lastIndexOf(_this2.props.fieldSeparator) + _this2.props.fieldSeparator.length);
          } else {
            short_label = fields[field].label;
          } //            console.log("label="+fields[field].label+", short="+short_label+", last index="+fields[field].label.lastIndexOf(this.props.fieldSeparator)+", length="+this.props.fieldSeparator.length);


          return _react.default.createElement("li", {
            key: prefix + field
          }, _react.default.createElement("button", {
            type: "button",
            onClick: _this2.handleFieldSelect.bind(_this2, fields[field].label, prefix + field)
          }, short_label));
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      //    console.log("Rendering rule. fieldOptions="+stringify(this.props.fieldOptions));

      /*    var field_items = [];
          map(this.props.fieldOptions, (label, value)=>
              field_items.push({label: label, value: value})
              );
          {map(this.props.fieldOptions, (label, item)=>
              <li key={value}><button type="button" onClick={this.handleFieldSelect.bind(this, label, item.value)}>{label}</button></li>
          )}
      //    console.log("fields="+stringify(field_items));*/
      var short_field;

      if (this.state.curField.lastIndexOf(this.props.fieldSeparator) >= 0) {
        short_field = this.state.curField.substring(this.state.curField.lastIndexOf(this.props.fieldSeparator) + this.props.fieldSeparator.length);
      } else {
        short_field = this.state.curField;
      }

      var toggle = _react.default.createElement(_reactBootstrap.Button, {
        bsStyle: "primary",
        onClick: this.toggle.bind(this)
      }, short_field, " ", _react.default.createElement("span", {
        className: "caret"
      }));

      if (this.state.curField != short_field) {
        RegExp.quote = function (str) {
          return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        };

        toggle = _react.default.createElement(_reactBootstrap.OverlayTrigger, {
          placement: "top",
          overlay: _react.default.createElement(_reactBootstrap.Tooltip, {
            id: "Field"
          }, _react.default.createElement("strong", null, this.state.curField.replace(new RegExp(RegExp.quote(this.props.fieldSeparator), 'g'), this.props.fieldSeparatorDisplay)))
        }, toggle);
      }

      var fieldMenuOptions = {
        isOpen: this.state.isFieldOpen,
        close: this.close.bind(this),
        toggle: toggle,
        nested: 'right',
        direction: 'right',
        align: 'left',
        animate: true
      };
      return _react.default.createElement("div", {
        className: "rule"
      }, _react.default.createElement("div", {
        className: "rule--header"
      }, _react.default.createElement("div", {
        className: "rule--actions"
      }, _react.default.createElement("button", {
        className: "action action--DELETE",
        onClick: this.props.removeSelf
      }, "Delete"))), _react.default.createElement(_reactBootstrap.Row, {
        className: "rule--body"
      }, (0, _size.default)(this.props.fieldOptions) ? _react.default.createElement(_reactBootstrap.Col, {
        key: "field",
        className: "rule--field"
      }, _react.default.createElement("label", null, "Field"), _react.default.createElement(_reactDdMenu.default, fieldMenuOptions, this.getFieldMenu(this.props.fieldOptions))) : null, (0, _size.default)(this.props.operatorOptions) ? _react.default.createElement(_reactBootstrap.Col, {
        key: "operator",
        className: "rule--operator"
      }, _react.default.createElement("label", null, "Operator"), _react.default.createElement(_reactBootstrap.Input, {
        className: "btn-success",
        type: "select",
        ref: "operator",
        value: this.props.selectedOperator,
        onChange: this.handleOperatorSelect.bind(this)
      }, (0, _map.default)(this.props.operatorOptions, function (label, value) {
        return _react.default.createElement("option", {
          key: value,
          value: value
        }, label);
      }))) : null, this.props.children));
    }
  }, {
    key: "render1",
    value: function render1() {
      return _react.default.createElement("div", {
        className: "rule"
      }, _react.default.createElement("div", {
        className: "rule--header"
      }, _react.default.createElement("div", {
        className: "rule--actions"
      }, _react.default.createElement("button", {
        className: "action action--DELETE",
        onClick: this.props.removeSelf
      }, "Delete"))), _react.default.createElement("div", {
        className: "rule--body"
      }, (0, _size.default)(this.props.fieldOptions) ? _react.default.createElement("div", {
        key: "field",
        className: "rule--field"
      }, _react.default.createElement("label", null, "Field"), _react.default.createElement("select", {
        ref: "field",
        value: this.props.selectedField,
        onChange: this.handleFieldSelect.bind(this)
      }, (0, _map.default)(this.props.fieldOptions, function (label, value) {
        return _react.default.createElement("option", {
          key: value,
          value: value
        }, label);
      }))) : null, (0, _size.default)(this.props.operatorOptions) ? _react.default.createElement("div", {
        key: "operator",
        className: "rule--operator"
      }, _react.default.createElement("label", null, "Operator"), _react.default.createElement("select", {
        ref: "operator",
        value: this.props.selectedOperator,
        onChange: this.handleOperatorSelect.bind(this)
      }, (0, _map.default)(this.props.operatorOptions, function (label, value) {
        return _react.default.createElement("option", {
          key: value,
          value: value
        }, label);
      }))) : null, this.props.children));
    }
  }]);

  return Rule;
}(_react.Component)) || _class2, _defineProperty(_class, "propTypes", {
  fieldOptions: _propTypes.default.object.isRequired,
  operatorOptions: _propTypes.default.object.isRequired,
  setField: _propTypes.default.func.isRequired,
  setOperator: _propTypes.default.func.isRequired,
  removeSelf: _propTypes.default.func.isRequired,
  selectedField: _propTypes.default.string,
  selectedOperator: _propTypes.default.string,
  fieldSeparator: _propTypes.default.string,
  fieldSeparatorDisplay: _propTypes.default.string
}), _temp);
exports.default = Rule;