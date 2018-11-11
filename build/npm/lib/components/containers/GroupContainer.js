"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _function = _interopRequireDefault(require("react-pure-render/function"));

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

var stringify = require('json-stringify-safe');

var _default = function _default(Group) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(GroupContainer, _Component);

    function GroupContainer() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, GroupContainer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GroupContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shouldComponentUpdate", _function.default);

      return _this;
    }

    _createClass(GroupContainer, [{
      key: "setConjunction",
      value: function setConjunction(conjunction) {
        this.props.actions.setConjunction(this.props.path, conjunction);
      }
    }, {
      key: "removeSelf",
      value: function removeSelf() {
        this.props.actions.removeGroup(this.props.path);
      }
    }, {
      key: "addGroup",
      value: function addGroup() {
        this.props.actions.addGroup(this.props.path);
      }
    }, {
      key: "addRule",
      value: function addRule() {
        this.props.actions.addRule(this.props.path);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var currentNesting = this.props.path.size;
        var maxNesting = this.props.config.settings.maxNesting; // Don't allow nesting further than the maximum configured depth and don't
        // allow removal of the root group.

        var allowFurtherNesting = typeof maxNesting === 'undefined' || currentNesting < maxNesting;
        var allowRemoval = currentNesting > 1;
        var conjunctionOptions = (0, _mapValues.default)(this.props.config.conjunctions, function (item, index) {
          return {
            id: "conjunction-".concat(_this2.props.id, "-").concat(index),
            name: "conjunction[".concat(_this2.props.id, "]"),
            label: item.label,
            checked: index === _this2.props.conjunction,
            setConjunction: function setConjunction() {
              return _this2.setConjunction.call(_this2, index);
            }
          };
        });
        return _react.default.createElement(Group, {
          id: this.props.id,
          allowRemoval: allowRemoval,
          allowFurtherNesting: allowFurtherNesting,
          conjunctionOptions: conjunctionOptions,
          removeSelf: this.removeSelf.bind(this),
          addGroup: this.addGroup.bind(this),
          addRule: this.addRule.bind(this)
        }, this.props.children);
      }
    }]);

    return GroupContainer;
  }(_react.Component), _defineProperty(_class, "propTypes", {
    config: _propTypes.default.object.isRequired
  }), _temp;
};

exports.default = _default;