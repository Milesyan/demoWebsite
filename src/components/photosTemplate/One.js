import React, { Component } from 'react'
import styles from './One.module.scss';
import { DateTag } from '../../basicComponents';
import Template from './Template';

type Props = {
  photo: Object,
  mode: string,
  date: String,
  text: String,
  isDebug: Boolean,
  pageNum: Number
}
export default class One extends Component<Props> {
  renderOneHorizontalsWithText = (photo, text, date) => (
    <div className={styles.OneHorizontalsWithText}>
      <div className={styles.photoText}>
        <DateTag date={date}/>
        <div style={{marginLeft: 68, flex: 1}}>
          {this.props.text}
        </div>
      </div>
      <div className={styles.photosWrapper}>
        <img
          key={photo.id}
          className={styles.image}
          alt="nothing" 
          src={photo.url}
        />
      </div>
  </div>
  )
 
  renderOneVerticalsWithText = (photo, text, date) => (
    <div className={styles.OneVerticalsWithText}>
      <div className={styles.photoText}>
        <DateTag date={date}/>
        <div style={{flex: 1, marginTop: 320}}>
          {this.props.text}
        </div>
      </div>
      <div className={styles.photosWrapper}>
        <img
          key={photo.id}
          className={styles.image}
          alt="nothing" 
          src={photo.url}
        />
      </div>
  </div>
  )
 
  renderOneHorizontals = (photo) => (
    <div className={styles.renderOneImageHorizontal}>
      <img
        key={photo.id}
        className={styles.image}
        alt="nothing" 
        src={photo.url}
      />
  </div>
  )
 
  renderOneVerticals = (photo) => (
    <div className={styles.renderOneImageVertical}>
      <img
        key={photo.id}
        className={styles.image}
        alt="nothing" 
        src={photo.url}
      />
  </div>
  )

  render() {
    const photo = this.props.photos[0];
    if (!photo) {
      return null;
    }
    const mode = this.props.mode;
    const text = this.props.text;
    let renderer = null;
    if (mode === Symbol.for('horizontal') ) {
      renderer = text !== Symbol.for('Null') ? this.renderOneHorizontalsWithText : this.renderOneHorizontals;
    } else if (mode === Symbol.for('vertical')) {
      renderer = text !== Symbol.for('Null') ? this.renderOneVerticalsWithText : this.renderOneVerticals;
    } else {
      throw new Error('Invalid mode');
    }
    return (
      <Template 
        render={renderer.bind(this, photo, text, this.props.date)}
        pageNum={this.props.pageNum} 
        date={this.props.date}/>
    )
  }
}
