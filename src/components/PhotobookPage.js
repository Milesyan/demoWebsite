import React, { Component } from 'react'
import { One, Two, Three } from './photosTemplate';
type Props = {
  photo: Object,
  mode: string,
  date: String,
  text: String
}
export default class PhotobookPage extends Component<Props> {
  componentDidMount() {
  }
 
  render() {
    const photos = this.props.photos;

    // const Template = [One, Two, Three][photos.length] || One;
    const Template = One;
    return (
      <div style={{backgroundColor: 'lightyellow', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Template photos={photos} mode={this.props.mode}/>
      </div>
    )
  }
}
