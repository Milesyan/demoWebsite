import React, { Component } from 'react';
import styles from './Previews.module.scss';
import { RequestInviteDialog } from '.';
import { Button } from '../basicComponents';
import { connect } from 'react-redux';
import { updateImageInfo } from '../actions/Photos';
import { setHomeStatusProcess } from '../actions/Home';
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
export class Previews extends Component<Props, State> {
  componentDidMount() {
    //DEBUG
    setTimeout(() => {
      this.processPhotos();
    }, 1000);
  }
  onDownloadPDF = () => {
    domtoimage.toBlob(document.getElementById('example'), {width: 2480, height: 3354})
      .then(blob=> {
        saveAs(blob, 'my-node.jpg');
      })
  }

  processPhotos = () => {
    this.props.setHomeStatusProcess()
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
  render() {
    return (
      <div className={styles.container} id="example">
        <Button onClick={this.processPhotos}>
          Process Photos
        </Button>
        <div className={styles.photos}>
          {
            Object.keys(this.props.photos).map(dt => (
              this.renderPhotosForDate(dt)
            ))
          }
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  photos: getPhotos(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateImageInfo,
  setHomeStatusProcess
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Previews);