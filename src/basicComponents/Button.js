import React, { PureComponent } from 'react';
import styles from './Button.module.scss';

type Props = {
  isDisabled: ?Boolean,
  onClick: Function,
  style: Object
}
export default class Button extends PureComponent<Props> {
  
  render() {
    return (
      <button
        style={this.props.style}
        className={this.props.isDisabled ? `${styles.primaryBtn} ${styles.disabledBtn}` : styles.primaryBtn }
        onClick={this.props.isDisabled ? null : this.props.onClick}>
        {this.props.children || 'Default Button Text'}
      </button>
    )
  }
}
