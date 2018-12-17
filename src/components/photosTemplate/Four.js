import React, { Component } from 'react'
import styles from './Four.module.scss';
import moduleStyles from './template.module.scss';
import { DateTag } from '../../basicComponents';

type Props = {
  photo: Object,
  mode: string,
  date: String,
  text: String,
  isDebug: Boolean
}
export default class Four extends Component<Props> {
  renderFourHorizontalsWithText = (photos, text, date) => (
    <div className={styles.FourVerticalsWithText}>
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
 
  renderFourVerticalsWithText = (photos, text, date) => (
    <div className={styles.FourVerticalsWithText}>
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
 
  renderFourHorizontals = (photos) => (
    <div className={styles.renderFourHorizontals}>
      <img
        key={photos[0].id}
        className={styles.image}
        alt="nothing" 
        src={photos[0].url}
      />
      <img
        key={photos[1].id}
        className={styles.image}
        style={{marginTop: 65}}
        alt="nothing" 
        src={photos[1].url}
      />
      <img
        key={photos[2].id}
        className={styles.image}
        style={{marginTop: 65}}
        alt="nothing" 
        src={photos[2].url}
      />
  </div>
  )
 
  renderFourVerticals = (photos) => (
    <div className={styles.FourVerticalImgsWrapper}>
      <img
        key={photos[0].id}
        className={styles.image}
        alt="nothing" 
        src={photos[0].url}
      />
      <img
        key={photos[1].id}
        className={styles.image}
        style={{marginLeft: 67}}
        alt="nothing" 
        src={photos[1].url}
      />
      <img
        key={photos[2].id}
        className={styles.image}
        style={{marginLeft: 67}}
        alt="nothing" 
        src={photos[2].url}
      />
  </div>
  )

  render() {
    const photos = this.props.photos.slice(0, 4);
    if (photos.length<4){
      return null;
    }
    const mode = this.props.mode;
    const text = this.props.text;
    let renderer = null;
    if (mode === Symbol.for('horizontal') ) {
      renderer = text ? this.renderFourVerticalsWithText : this.renderFourHorizontals;
    } else if (mode === Symbol.for('vertical')) {
      renderer = text ? this.renderFourHorizontalsWithText : this.renderFourVerticals;
    } else {
      throw new Error('Invalid mode');
    }
    return (
      <div className={moduleStyles.container}>
        {renderer && renderer(photos, text, this.props.date)}
      </div>
    )
  }
}
