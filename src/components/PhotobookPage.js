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
    // const Template = [One, Two, Three][photos.length] || One;
    const Template = Two;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Template {...this.props} isDebug={true}/>
      </div>
    )
  }
}
