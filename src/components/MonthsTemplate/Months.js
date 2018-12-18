import React, { PureComponent } from 'react'

import styles from './Months.module.scss';

export default class Months extends PureComponent {
  render() {
    const className = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][this.props.month - 1]
    return (
      <div className={`${styles.container} ${styles[className]}`}>
        wefwfe
      </div>
    )
  }
}
