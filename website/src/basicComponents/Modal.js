import React, { PureComponent } from 'react';
import styles from './Modal.module.scss';

type Props = {
  onClick: Function,
  children: any
}
export default class Modal extends PureComponent {
  render() {
    return (
      <div 
        onClick={this.props.onClick}
        className={styles.container}>
        <div 
          className={styles.main}
          onClick={(e)=>{e.stopPropagation();}}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
