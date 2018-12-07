import React, { PureComponent } from 'react';
import styles from './Button.module.scss';

export default class Button extends PureComponent {
  render() {
    return (
      <button
        className={styles.primaryBtn}
        onClick={this.props.onClick}>
        {this.props.children || 'Default Button Text'}
      </button>
    )
  }
}
