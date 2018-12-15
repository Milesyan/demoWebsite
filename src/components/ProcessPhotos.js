import React, { Component } from 'react';
import styles from './ProcessPhotos.module.scss';
import { PhotobookPage } from '.';
import { Button } from '../basicComponents';
import { connect } from 'react-redux';
import { updateImageInfo } from '../actions/Photos';
import { bindActionCreators } from 'redux';
import { getPhotos } from '../selectors/Photos';
import domtoimage from 'dom-to-image';
import saveAs from 'file-saver';
import ImagePreview from '../basicComponents/ImagePreview';


type Props = {
  showDialog: boolean,
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
    domtoimage.toBlob(node, {width: 2480, height: 3354, style:{zoom: 1}})
      .then(blob=> {
        saveAs(blob, `photobook_${idx+1}.jpg`);
      })
  }
  onImagePreviewLoad = (...args) => {
    this.props.updateImageInfo && this.props.updateImageInfo(...args);
  }

  renderPhotosForDate = (dt)=> {
    const photosForDay = this.props.photos[dt];
    return photosForDay.map(photoObj=>(
      <ImagePreview
        key={photoObj.url}
        onLoad={this.onImagePreviewLoad.bind(this, dt, photoObj.url)}
        photo={photoObj}
        date={dt}
      />
    ))
  }
  groupPhotos = (photos) => {
    const res = [];
    const dates = Object.keys(photos).sort((a,b)=>a>b);
    for (const dt of dates) {
      const oneDayPhotos = photos[dt];
      const horizontals = oneDayPhotos.filter(p=> p.width > p.height);
      const verticals = oneDayPhotos.filter(p=>p.width <= p.height);
      if (horizontals.length) {
        res.push(<PhotobookPage key={horizontals[0].url} photos={horizontals} mode={'horizontal'}/>)
      } 
      if (verticals.length) {
        res.push(<PhotobookPage key={verticals[0].url} photos={verticals} mode={'vertical'}/>)
      }
      // break;//debug
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
    const photoGroups = this.groupPhotos(this.props.photos)
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
  photos: getPhotos(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateImageInfo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProcessPhotos);