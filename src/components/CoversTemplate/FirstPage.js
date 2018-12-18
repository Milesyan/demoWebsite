import React, { PureComponent } from 'react'
import styles from '../CoversTemplate/FirstPage.module.scss';

import firstpageCartoon from './images/firstpage-cartoon.png';
import paperPlane from './images/paper-plane.png';
import { connect } from 'react-redux'
import { getBaby } from '../../selectors/Baby';
import { getPostsStartEndDate } from '../../selectors/Photos';
import { convertNumToChar } from '../../utils';

type Props = {
  baby: Object,
  dateStr: String
}
export class Cover extends PureComponent<Props> {
  render() {
    const intAge = new Date().getFullYear() - new Date(this.props.baby.bornDate).getFullYear();
    const age = convertNumToChar(intAge);
    return (
      <div className={styles.container}>
        <img alt='cartoon' src={firstpageCartoon} style={{height: 2116, width: 2134, bottom: 0, left: 0}} />
        <img alt='paper-plain' src={paperPlane} style={{height: 393, width: 2825, top: 1205, right: 159}} />
        <div style={{position: 'absolute', top: 1742.5, right: 159, textAlign: 'end' }}>
          <div style={{fontWeight: 600, fontSize: 80, color: 'white'}}>
            {this.props.baby.name} · {age}岁的宝宝时光书
          </div>
          <div style={{fontWeight: 300, fontSize: 72, color: 'white', marginTop: 30}}>
            {this.props.dateStr}
          </div>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  baby: getBaby(state),
  dateStr: getPostsStartEndDate(state)
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Cover)
