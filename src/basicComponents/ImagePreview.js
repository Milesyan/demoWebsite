import React, { Component } from 'react'

type Props = {
  photo: Object,
  onLoad: Function,
  date: String
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
      this.props.onLoad(img.width, img.height);
    } else {
      setTimeout(() => {
        this.getImageData(img);
      }, 1000);
      this.counter += 1;
    }
  }
  
  render() {
    const loading = !this.props.photo.width || !this.props.photo.height;
    return (
      <div>
        <img
          style={{ height: 100, width: 100, margin: 10, objectFit: 'contain', backgroundColor: '#eee'}}
          alt="nothing" src={this.props.photo.url}
        />
        {
          loading ? <div> Loading ...</div> :
          <div style={{fontSize: 14, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <div>{this.props.date}</div>
            <div>{this.props.photo.width}/{this.props.photo.height}</div>
          </div>
        }
      </div>
    )
  }
}
