import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Col, Input} from "react-bootstrap";

export default class Date extends Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    delta: PropTypes.number.isRequired
  };

  handleChange() {
//    const node = ReactDOM.findDOMNode(this.refs.date);
    this.props.setValue(this.refs.date.getValue());
  }

  handleClick() {
    console.log("In Date:handleClick");
  }

  render() {
    return (
      <Col xs={3}>
          <label>Value</label>
          <Input autoFocus={this.props.delta === 0} type="date" ref="date" value={this.props.value} onInput={this.handleClick(this)} onChange={this.handleChange.bind(this)} />
      </Col>
    );
  }
}
