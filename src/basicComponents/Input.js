import React, { PureComponent } from 'react';
import styles from './Input.module.scss';

type Props = {
  onEmitUpdates: Function,
  placeholder: ?String,
}

type State = {
}
export default class Input extends PureComponent<Props, State> {

  onChange = (e) => {
    this.props.onEmitUpdates(e);
  }

  onBlur = (e) => {
    this.props.onEmitUpdates(e);
  }

  render() {
    return (
      <div className={styles.container}>
        <input 
          className={this.props.errMsg  ? styles.dialogInput + ' ' + styles.errorInput : styles.dialogInput} 
          placeholder={this.props.placeholder} 
          onChange={this.onChange}
          onBlur={this.onBlur}
        />
        {
          this.props.errMsg && 
          <div className={styles.errorMsg}>
            {this.props.errMsg}
          </div>
        }
      </div>
    )
  }
}
