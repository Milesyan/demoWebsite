import React, { Component } from 'react'

type Props = {
  photo: Object,
  onLoad: Function
}
export default class ImagePreview extends Component<Props> {
  componentDidMount() {
    const img = new Image();
    img.src = this.props.photo.url;
    this.getImageData(img);
    this.counter = 0;
  }

  getImageData = (img) => {
    if (this.counter > 20) {
      console.warn("FAIL");
      return;
    }
    if (img.height && img.width) {
      this.props.onLoad(img.height, img.width);
    } else {
      setTimeout(() => {
        this.getImageData(img);
      }, 1000);
      this.counter += 1;
    }
  }
  
  render() {
    console.warn(this.props.photo.width);
    return (
      <div>
        <img
          style={{ height: 100, width: 100, objectFit: 'contain', backgroundColor: '#eee'}}
          alt="nothing" src={this.props.photo.url}/>
        <div>
          DEBUG {this.props.photo.width}
          {this.props.photo.height}
        </div>
      </div>
    )
  }
}
