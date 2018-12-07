import React, { PureComponent } from 'react';
import styles from './Header.module.scss';

export default class Header extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        Broccoli & Co.
      </div>
    )
  }
}