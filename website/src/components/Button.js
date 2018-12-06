import React, { PureComponent } from 'react';
import './Button.css';

export default class Button extends PureComponent {
  render() {
    return (
      <button
        className="primary-btn"
        onClick={this.props.onClick}>
        {this.props.children || 'Default Button Text'}
      </button>
    )
  }
}
