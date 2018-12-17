import React, { Component } from 'react'
import styles from './template.module.scss';
type Props = {
  photo: Object,
  mode: string,
  date: String,
  text: String,
  isDebug: Boolean
}
export default class One extends Component<Props> {
  componentDidMount() {
  }
 
  render() {
    const photo = this.props.photos[0];
    const mode = this.props.mode;
    const className = mode === Symbol.for('horizontal') ? styles.oneHorizontalImgWithText : styles.oneVerticalImgWithText;
    return (
      <div className={styles.container}>
        <img
          className={className}
          alt="nothing" 
          src={photo.url}
        />
      </div>
    )
  }
}
