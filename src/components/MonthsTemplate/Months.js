import React, { PureComponent } from 'react'

import styles from './Months.module.scss';
import Month1 from './images/month-1.png';
import Month2 from './images/month-2.png';
import Month3 from './images/month-3.png';
import Month4 from './images/month-4.png';
import Month5 from './images/month-5.png';
import Month6 from './images/month-6.png';
import Month7 from './images/month-7.png';
import Month8 from './images/month-8.png';
import Month9 from './images/month-9.png';
import Month10 from './images/month-10.png';
import Month11 from './images/month-11.png';
import Month12 from './images/month-12.png';
import { calculateAgeAtMonth } from '../../utils';
type Props = {
  month: String,
  year: Stirng,
}
export default class Months extends PureComponent<Props> {
  render() {
    const className = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][this.props.month - 1]
    const image = [Month1, Month2, Month3, Month4, Month5, Month6, Month7, Month8, Month9, Month10, Month11, Month12][this.props.month - 1]; 
    const ageStr = calculateAgeAtMonth(this.props.baby.bornDate, this.props.year,this.props.month);
    return (
      <div className={`${styles.container} ${styles[className]}`}>
        <div className={styles.yearText}>
          {this.props.year}
        </div>
        <img alt='month-img' src={image} className={styles.monthImage}/>
        {this.props.baby.name && ageStr && <div className={styles.babyText}>
          {this.props.baby.name}{ageStr}啦~
        </div>}
      </div>
    )
  }
}
