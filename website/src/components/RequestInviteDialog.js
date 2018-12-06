import React, { PureComponent } from 'react'
import { Modal, Button } from '.'
import './RequestInviteDialog.css';

export default class RequestInviteDialog extends PureComponent {
  render() {
    return (
      <Modal onClick={this.props.onClose}>
        <div className="request-dialog">
          <div className="request-dialog-title">
            Request an invite
          </div>
          <input className="request-dialog-input" placeholder="Full Name"/>
          <input className="request-dialog-input" placeholder="Email"/>
          <input className="request-dialog-input" placeholder="Confirm Email"/>
        </div>
        <Button onClick={this.props.onSend}>
          Send
        </Button>
      </Modal>
    )
  }
}
