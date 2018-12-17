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


type Props = {
  posts: Array<*>,
  updateImageInfo: typeof updateImageInfo
}

type State = {
}
export class ProcessPhotos extends Component<Props, State> {

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
      if (firstPhotomode === Symbol.for('horizontal')) {
        this._pushReactElementToRes(horizontals, res, Symbol.for('horizontal'), date, text)
        this._pushReactElementToRes(verticals, res, Symbol.for('vertical'), date)
      } else {
        this._pushReactElementToRes(verticals, res, Symbol.for('vertical'), date, text)
        this._pushReactElementToRes(horizontals, res, Symbol.for('horizontal'), date)
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


  render() {
    // DEBUG
    const photoGroups = this.groupPhotos(this.props.posts).slice(0, 1);
    return (
      <div className={styles.container}>
        <Button onClick={this.onDownloadPDF}>
          Export
        </Button>
        <div className={styles.photos} id="photo-groups">
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