import React, { Component } from 'react';
import styles from './Previews.module.scss';
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
  photos: Array<*>,
  updateImageInfo: typeof updateImageInfo
}

type State = {
}

export class Previews extends Component<Props, State> {
  // componentDidUpdate = (prevProps, prevState) => {
  //   if (this.props.photos !== prevProps.photos) {
  //     const photoLoaded = !Object.values(this.props.photos).map(p=>(p.width && p.height) || -1).includes(-1)
  //     if (photoLoaded) {
  //       this.props.setHomeStatusProcess()
  //     }
  //   }
  // }
  
  onDownloadPDF = () => {
    domtoimage.toBlob(document.getElementById('example'), {width: 2480, height: 3354})
      .then(blob=> {
        saveAs(blob, 'my-node.jpg');
      })
  }

  onImagePreviewLoad = (id, width, height) => {
    this.props.updateImageInfo && this.props.updateImageInfo(id, width, height);
  }

  renderPhoto = (photo)=> {
    return (<ImagePreview
        key={photo.id}
        onLoad={this.onImagePreviewLoad.bind(this, photo.id)}
        photo={photo}
      />)
  }
  render() {
    const photos = Object.values(this.props.photos);
    return (
      <div className={styles.container} id="example">
        {/*<Button onClick={this.processPhotos}>
            Process Photos
          </Button>*/}
        <div className={styles.photos}>
          {
            photos.map(photo=>(
              this.renderPhoto(photo)
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