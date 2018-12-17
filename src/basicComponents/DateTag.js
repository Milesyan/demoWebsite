import React, { PureComponent } from 'react';
import styles from './DateTag.module.scss';

type Props = {
  date: String
}
export default class DateTag extends PureComponent<Props> {
  render() {
    const [year, month, day] = this.props.date.split('-');
    const monthClass = [styles.jan, styles.feb, styles.mar, styles.apr, 
      styles.may, styles.jun, styles.jul, styles.aug, 
      styles.sep, styles.oct, styles.nov, styles.dec][parseInt(month) - 1]
    return (
      <div className={`${monthClass} ${styles.dateLabel}` }>
        {parseInt(month)}月{day}日
      </div>
    )
  }
}
