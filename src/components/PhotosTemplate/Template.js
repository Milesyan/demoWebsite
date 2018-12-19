import React, { Component } from 'react'
import moduleStyles from './template.module.scss';

type Props = {
  render: Function,
  pageNum: Number,
  date: String
}
export default class One extends Component<Props> {
  render() {
    let styleObj;
    if (this.props.pageNum % 2) {
      styleObj = {left: 222, flexDirection: 'row', justifyContent: 'space-between'};
    } else {
      styleObj = {right: 222, flexDirection: 'row-reverse', justifyContent: 'space-between'};
    }
    const pageNumStr = this.props.pageNum.toString().padStart(2, '0');
    return (
      <div className={moduleStyles.container}>
        {this.props.render()}
        <div className={moduleStyles.pageNum} style={styleObj}>
          <span>{pageNumStr}</span>
          <span>{this.props.date.replace(/-/g,'.')}</span>
        </div>
      </div>
    )
  }
}
