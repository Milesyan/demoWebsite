import React, { Component } from 'react'
import { One, Two, Three, Four, Six } from './photosTemplate';
type Props = {
  photo: Object,
  mode: string,
  date: String,
  text: String
}
export default class PhotobookPage extends Component<Props> {
  componentDidMount() {
  }
 
  findTemplateByProps = (length, mode, date, text) => {
    let res = [One, Two, Three, Four][length-1] || Six;
    return res;
  }
  render() {
    const Template = this.findTemplateByProps(this.props.photos.length, this.props.mode, this.props.date, this.props.text);
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Template {...this.props} isDebug={true}/>
      </div>
    )
  }
}
