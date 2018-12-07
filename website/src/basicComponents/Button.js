import React, { PureComponent } from 'react';
import styles from './Button.module.scss';

export default class Button extends PureComponent {
  
  render() {
    return (
      <button
        className={this.props.isDisabled ? `${styles.primaryBtn} ${styles.disabledBtn}` : styles.primaryBtn }
        onClick={this.props.isDisabled ? null : this.props.onClick}>
        {this.props.children || 'Default Button Text'}
      </button>
    )
  }
}
