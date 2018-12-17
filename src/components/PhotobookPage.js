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
 
  findTemplateByProps = (length, mode, date, text) => {
    let res;
    switch (length) {
      case 1:
        res = One;
        break;
      case 2:
        res = Two;
        break;
      default:
        res = Two;
        break;
    }
    res = Three;
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
