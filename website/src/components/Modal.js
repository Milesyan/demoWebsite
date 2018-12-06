import React, { PureComponent } from 'react';
import './Modal.css';

export default class Modal extends PureComponent {
  render() {
    return (
      <div 
        onClick={this.props.onClick}
        className="modal-container">
        <div 
          className="modal-main" 
          onClick={(e)=>{e.stopPropagation();}}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
