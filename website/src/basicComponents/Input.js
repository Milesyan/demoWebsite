import React, { PureComponent } from 'react';
import styles from './Input.module.scss';

type Props = {
  shouldEmitUpdates: ?Boolean,
  onEmitUpdates: Function,
  errMsg: ?String,
  placeholder: ?String,
}

type State = {
  shouldEmitUpdates: Boolean
}
export default class Input extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      shouldEmitUpdates: props.shouldEmitUpdates ? true : false,
    }
  }

  onChange = (e) => {
    if (this.state.shouldEmitUpdates) {
      this.props.onEmitUpdates(e);
    }
  }

  onBlur = (e) => {
    this.props.onEmitUpdates(e);
    this.setState({shouldEmitUpdates: true});
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
