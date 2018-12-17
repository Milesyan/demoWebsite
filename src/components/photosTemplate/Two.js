import React, { Component } from 'react'
import styles from './Two.module.scss';
import moduleStyles from './template.module.scss';
import { DateTag } from '../../basicComponents';

type Props = {
  photo: Object,
  mode: string,
  date: String,
  text: String,
  isDebug: Boolean
}
export default class Two extends Component<Props> {
  renderTwoHorizontalsWithText = (photos, text, date) => (
    <div className={styles.TwoHorizontalsWithText}>
      <div className={styles.photoText}>
        <DateTag date={date}/>
        <div style={{marginTop: 320, width: 498}}>
          {this.props.text}
        </div>
      </div>
      <div className={styles.photosWrapper}>
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
  </div>
  )
 
  renderTwoVerticalsWithText = (photos, text, date) => (
    <div className={styles.TwoVerticalsWithText}>
      <div className={styles.photoText}>
        <DateTag date={date}/>
        <div style={{flex: 1, marginLeft: 98}}>
          {this.props.text}
        </div>
      </div>
      <div className={styles.photosWrapper}>
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
  </div>
  )
 
  renderTwoHorizontals = (photos) => (
    <div className={styles.renderTwoHorizontals}>
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
  </div>
  )
 
  renderTwoVerticals = (photos) => (
    <div className={styles.twoVerticalImgsWrapper}>
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
  </div>
  )

  render() {
    const photos = this.props.photos.slice(0, 2);
    if (photos.length<2){
      return null;
    }
    const mode = this.props.mode;
    const text = this.props.text;
    let renderer = null;
    if (mode === Symbol.for('horizontal') ) {
      renderer = text ? this.renderTwoHorizontalsWithText : this.renderTwoHorizontals;
    } else if (mode === Symbol.for('vertical')) {
      renderer = text ? this.renderTwoVerticalsWithText : this.renderTwoVerticals;
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
