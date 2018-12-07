import React, { PureComponent } from 'react'
import styles from './RequestInviteDialog.module.scss';
import { Button, Modal, Input } from '../basicComponents';
import { validateEmail } from '../utils';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestInvite } from '../actions/RequestInvite';
class RequestInviteDialog extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      confirmedEmail: '',
      nameErrMsg: null,
      emailErrMsg: null,
      confirmEmailMsg: null
    }
  }
  onNameChange = (e) => {
    const text = e.target.value;
    let err;
    if (!text.length) {
      err = 'You must input a name';
    } else if (text.length < 3) {
      err = 'Full name must be at least 3 charactors long';
    } else {
      err = '';
    }
    this.setState({
      nameErrMsg: err || null,
      fullName: text
    })
  }

  onEmailChange = (e) => {
    const text = e.target.value;
    let err;
    if (!text.length) {
      err = 'Please input an Email address';
    } else if (!validateEmail(text)) {
      err = 'Please input a valid Email address';
    } else {
      err = '';
    }
    let state = {
      emailErrMsg: err || null,
      email: text
    }
    if (!err) {
      state = {...state, confirmEmailMsg: text === this.state.confirmedEmail}
    }
    this.setState(state);
  }

  onConfirmedEmailChange = (e) => {
    const text = e.target.value;
    let err;
    if (!text.length) {
      err = 'Pleae input an Email address';
    } else if (!validateEmail(text)) {
      err = 'Please input a valid Email address';
    } else if (text !== this.state.email) {
      err = 'Email address does not match'
    } else {
      err = '';
    }
    this.setState({
      confirmEmailMsg: err || null,
      confirmedEmail: text
    })
  }

  onSend = () => {
    this.props.requestInvite(this.state.fullName, this.state.email);
  }
  
  render() {
    return (
      <Modal onClick={this.props.onClose}>
        <div className={styles.dialog}>
          <div className={styles.dialogTitle}>
            Request an invite
          </div>
          <Input
            placeholder="Full Name"
            onEmitUpdates={this.onNameChange}
            errMsg={this.state.nameErrMsg}
          />
          <Input
            placeholder="Email"
            onEmitUpdates={this.onEmailChange}
            errMsg={this.state.emailErrMsg}
          />
          <Input
            placeholder="Confirm Email"
            onEmitUpdates={this.onConfirmedEmailChange}
            errMsg={this.state.confirmEmailMsg}
          />
        </div>
        <Button onClick={this.onSend}>
          Send
        </Button>
      </Modal>
    )
  }
}


const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestInvite
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(RequestInviteDialog);