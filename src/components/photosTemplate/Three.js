import React, { Component } from 'react'
import styles from './Three.module.scss';
import { DateTag } from '../../basicComponents';
import Template from './Template';

type Props = {
  photo: Object,
  mode: string,
  date: String,
  text: String,
  isDebug: Boolean
}
export default class Three extends Component<Props> {
  renderThreeHorizontalsWithText = (photos, text, date) => (
    <div className={styles.ThreeHorizontalsWithText}>
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
        <img
          key={photos[2].id}
          className={styles.right}
          alt="nothing" 
          src={photos[2].url}
        />
      </div>
  </div>
  )
 
  renderThreeVerticalsWithText = (photos, text, date) => (
    <div className={styles.ThreeVerticalsWithText}>
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
        <img
          key={photos[2].id}
          className={styles.right}
          alt="nothing" 
          src={photos[2].url}
        />
      </div>
  </div>
  )
 
  renderThreeHorizontals = (photos) => (
    <div className={styles.renderThreeHorizontals}>
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
 
  renderThreeVerticals = (photos) => (
    <div className={styles.ThreeVerticalImgsWrapper}>

    <div className={styles.photosWrapper}>
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
  </div>
  )

  render() {
    const photos = this.props.photos.slice(0, 3);
    if (photos.length<3){
      return null;
    }
    const mode = this.props.mode;
    const text = this.props.text;
    let renderer = null;
    if (mode === Symbol.for('horizontal') ) {
      renderer = text !== Symbol.for('Null') ? this.renderThreeHorizontalsWithText : this.renderThreeHorizontals;
    } else if (mode === Symbol.for('vertical')) {
      renderer = text !== Symbol.for('Null') ? this.renderThreeVerticalsWithText : this.renderThreeVerticals;
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
