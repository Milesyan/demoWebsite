import React, { Component } from 'react'
import styles from './Six.module.scss';
import { DateTag } from '../../basicComponents';
import Template from './Template';

type Props = {
  photo: Object,
  mode: string,
  date: String,
  text: String,
  isDebug: Boolean
}
export default class Six extends Component<Props> {
  renderSixHorizontalsWithText = (photos, text, date) => (
    <div className={styles.SixVerticalsWithText}>
      <div className={styles.photoText}>
        <DateTag date={date}/>
        <div style={{flex: 1, marginLeft: 98}}>
          {this.props.text}
        </div>
      </div>
      <div className={styles.photosWrapper}>
        {
          photos.map(photo=> (
            <img
            key={photo.id}
            className={styles.image}
            alt="nothing" 
            src={photo.url}
          />
          ))
        }
      </div>
  </div>
  )
 
  renderSixVerticalsWithText = (photos, text, date) => (
    <div className={styles.SixVerticalsWithText}>
      <div className={styles.photoText}>
        <DateTag date={date}/>
        <div style={{flex: 1, marginLeft: 98}}>
          {this.props.text}
        </div>
      </div>
      <div className={styles.photosWrapper}>
        {
          photos.map(photo=> (
            <img
            key={photo.id}
            className={styles.image}
            alt="nothing" 
            src={photo.url}
          />
          ))
        }
      </div>
  </div>
  )
 
  renderSixHorizontals = (photos) => (
    <div className={styles.sixHorizontals}>
      <div className={styles.photosWrapper}>
        {
          photos.map(photo=> (
            <img
            key={photo.id}
            className={styles.image}
            alt="nothing" 
            src={photo.url}
          />
          ))
        }
      </div>
  </div>
  )
 
  renderSixVerticals = (photos) => (
    <div className={styles.SixVerticals}>
      <div className={styles.photosWrapper}>
        {
          photos.map(photo=> (
            <img
            key={photo.id}
            className={styles.image}
            alt="nothing" 
            src={photo.url}
          />
          ))
        }
      </div>
  </div>
  )

  render() {
    const photos = this.props.photos.slice(0, 6);
    if (photos.length<5){
      return null;
    }
    const mode = this.props.mode;
    const text = this.props.text;
    let renderer = null;
    if (mode === Symbol.for('horizontal') ) {
      renderer = text ? this.renderSixVerticalsWithText : this.renderSixHorizontals;
    } else if (mode === Symbol.for('vertical')) {
      renderer = text ? this.renderSixHorizontalsWithText : this.renderSixVerticals;
    } else {
      throw new Error('Invalid mode');
    }
    return (
      <Template 
        render={renderer.bind(this, photos, text, this.props.date)}
        pageNum={this.props.pageNum} 
        date={this.props.date}/>
    )
  }
}
