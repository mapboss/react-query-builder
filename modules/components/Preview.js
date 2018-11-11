import { Component } from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
import queryString from '../utils/queryString';

var stringify = require('json-stringify-safe');

export default class Preview extends Component {
  static propTypes = {
    config: PropTypes.object.isRequired
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return this.props.children(queryString(this.props.tree, this.props.config));
  }
}
