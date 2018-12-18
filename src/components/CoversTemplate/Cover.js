import React, { PureComponent } from 'react'
import styles from '../CoversTemplate/Cover.module.scss';

import backpageSlogan from './images/backpage-slogan.png';
import backpageBg from './images/backpage-bg.png';
import coverpageCartoon from './images/coverpage-cartoon.png';
import coverpageLogo from './images/coverpage-logo.png';
import firstpageMark from './images/firstpage-mark.png';
import glowLogo from './images/glow-logo.png';
import mockQr from './images/mock-qr.jpg';
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
        <div className={styles.backPage}>
          <img alt='slogan' src={backpageSlogan} style={{height: 231, width: 1493, top: 1406, left: 796}} />
          <img alt='qr' src={mockQr} style={{height: 380, width: 380, top: 1727, left: 1351}} />
          <img alt='bg' src={backpageBg} style={{height: 701, width: 1540, bottom: 0, left: 0}} />
          <img alt='logo' src={glowLogo} style={{height: 110, width: 1507, bottom: 478, right: 110}} />
        </div>
        <div className={styles.frontPage}>
          <img alt='logo' src={coverpageLogo} style={{height: 404, width: 1926, top: 844, left: 409}} />
          <div style={{position: 'absolute', color: 'white', fontFamily: 'STYuanti-SC', fontSize: 92, letterSpacing: 7.4, top: 1361, left: 434}}>
            {this.props.baby.name} · {age}岁 
          </div>
          <div style={{position: 'absolute', color: 'white', fontFamily: 'STYuanti-SC', fontWeight: 'bold', fontSize: 68, letterSpacing: 7.4, bottom: 1316, left: 61, transform: 'rotate(-90deg)', transformOrigin: '0 0'}}>
            {this.props.baby.name} · {age}岁<span style={{marginLeft: 400}}>{this.props.dateStr}</span>
          </div>
          <img alt='cartoon' src={coverpageCartoon} style={{height: 1984, width: 1317, bottom: 282, right: 290}} />
          <img alt='mark' src={firstpageMark} style={{height: 659, width: 50, left: 409, bottom: 446}} />
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
