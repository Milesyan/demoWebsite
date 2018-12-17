import React, { Component } from 'react';
import styles from './ProcessPhotos.module.scss';
import { PhotobookPage } from '.';
import { Button } from '../basicComponents';
import { connect } from 'react-redux';
import { updateImageInfo } from '../actions/Photos';
import { bindActionCreators } from 'redux';
import { getPostsWithPhotos } from '../selectors/Photos';
import domtoimage from 'dom-to-image';
import saveAs from 'file-saver';
import ImagePreview from '../basicComponents/ImagePreview';
import Select from 'react-select';


type Props = {
  posts: Array<*>,
  updateImageInfo: typeof updateImageInfo
}

type State = {
}

const options = [
  { value: 0.1, label: '10%' },
  { value: 0.2, label: '20%' },
  { value: 0.3, label: '40%' },
  { value: 0.5, label: '50%' },
  { value: 0.8, label: '80%' },
  { value: 1, label: '100%' },
];


export class ProcessPhotos extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 0.1
    }
  }

  onDownloadPDF = () => {
    const nodes = document.getElementById('photo-groups').childNodes;
    for (const [idx, node] of nodes.entries()) {
      this.saveOnePhotoPage(node, idx);
    }

  }

  saveOnePhotoPage = (node, idx) => {
    domtoimage.toBlob(node, {width: 2480 * 2, height: 3354, style:{zoom: 1}})
      .then(blob=> {
        saveAs(blob, `photobook_${idx+1}.jpg`);
      })
  }
  onImagePreviewLoad = (...args) => {
    this.props.updateImageInfo && this.props.updateImageInfo(...args);
  }

  _pushReactElementToRes = (elements, res, mode, date, text=null) => {
    if (!elements || !elements.length) {
      return;
    }
    const key = elements.map(e=>e.id).reduce((p,v)=> p + '-' + v, '')
    res.push(<PhotobookPage key={key} photos={elements} mode={mode} text={text} date={date}/>)
  }

  groupPhotos = (posts) => {
    const res = [];
    for (const post of posts) {
      const oneDayPhotos = post.photoEntities;
      const horizontals = oneDayPhotos.filter(p=> p.width > p.height);
      const verticals = oneDayPhotos.filter(p=>p.width <= p.height);
      const text = post.text;
      const date = post.date;
      const firstPhotomode = oneDayPhotos[0].width > oneDayPhotos[0].height ? Symbol.for('horizontal') : Symbol.for('vertical');
      if (horizontals.length <= 6 && verticals.length <= 6) {
        if (firstPhotomode === Symbol.for('horizontal')) {
          this._pushReactElementToRes(horizontals, res, Symbol.for('horizontal'), date, text)
          this._pushReactElementToRes(verticals, res, Symbol.for('vertical'), date)
        } else {
          this._pushReactElementToRes(verticals, res, Symbol.for('vertical'), date, text)
          this._pushReactElementToRes(horizontals, res, Symbol.for('horizontal'), date)
        }
      } else if (horizontals.length > 6) {
        this._pushReactElementToRes(horizontals.slice(0, 6), res, Symbol.for('horizontal'), date, text)
        this._pushReactElementToRes(horizontals.slice(6), res, Symbol.for('horizontal'), date, text)
        this._pushReactElementToRes(verticals, res, Symbol.for('vertical'), date, text)
      } else if (verticals.length > 6) {
        this._pushReactElementToRes(verticals.slice(0, 6), res, Symbol.for('vertical'), date, text)
        this._pushReactElementToRes(verticals.slice(6), res, Symbol.for('vertical'), date, text)
        this._pushReactElementToRes(horizontals, res, Symbol.for('horizontal'), date, text)
      }
    }
    return this.groupByEveryTwo(res);
  }


  groupByEveryTwo = (pages) => {
    let group = [];
    for (let i=0, j=0; i < pages.length; i++) {
      if (i >= 2 && i % 2 === 0 ) {
        j++;
      }
      group[j] = group[j] || [];
      group[j].push(pages[i]);
    }
    return group;
  }

  handleChange = (value) => {
    this.setState({
      selectedOption: value
    })
  }
  render() {
    // DEBUG
    const photoGroups = this.groupPhotos(this.props.posts);
    console.warn(this.state.selectedOption);
    return (
      <div className={styles.container}>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '80%', marginTop: 30}}>
          <Button onClick={this.onDownloadPDF} style={{margin: 0}}>
            Export
          </Button>
          <div style={{width: 200,}}>
            <Select
              style={{width: '100%'}}
              placeholder={'Zoom: 10%'}
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </div>
        </div>
        <div 
          className={styles.photos} 
          style={{zoom: this.state.selectedOption.value}}
          id="photo-groups">
          {photoGroups.map((g, idx)=>(
            <div 
              key={idx}
              className={styles.photoGroup}
            >
              {g}
            </div>
          ))}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: getPostsWithPhotos(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateImageInfo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProcessPhotos);