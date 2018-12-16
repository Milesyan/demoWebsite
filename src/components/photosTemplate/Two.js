import React, { Component } from 'react'
import styles from './template.module.scss';
type Props = {
  photo: Object,
  mode: string,
  date: String,
  text: String,
  isDebug: Boolean
}
export default class Two extends Component<Props> {
  componentDidMount() {
  }
 
  render() {
    const photos = this.props.photos.slice(0, 2);
    if (photos.length<2){
      return null;
    }
    const mode = this.props.mode;
    const className = mode === Symbol.for('horizontal') ? styles.twoHorizontalImgWithText : styles.twoVerticalImgWithText;
    return (
      <div className={styles.container}>
        <div className={styles.twoVerticalImgsWrapper}>
            <img
              key={photos[0].id}
              className={styles.left}
              alt="nothing" 
              src={photos[0].url}
            />
            <img
              key={photos[1].id}
              className={styles.right}
              alt="nothing" 
              src={photos[1].url}
            />
        </div>

        {this.props.isDebug && <div style={{position: 'absolute', top: 0}}>
          Date: {this.props.date}
          <div>text: {this.props.text}</div>
        </div>}
      </div>
    )
  }
}
