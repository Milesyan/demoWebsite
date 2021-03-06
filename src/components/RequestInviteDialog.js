import React, { PureComponent } from 'react'
import styles from './RequestInviteDialog.module.scss';
import { Button, Modal, Input } from '../basicComponents';
import { validateEmail } from '../utils';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestInvite, resetRequestInviteDialog } from '../actions/RequestInvite';
import { getRequestDialogStatus, getRequestDialogMessage } from '../selectors/RequestInvite';
import { DIALOG_STATE } from '../reducers/RequestInvite';

type Props = {
  dialogStatus: number,
  dialogMessage: ?String,
  onClose: Function,
  resetRequestInviteDialog: Function,
  requestInvite: Function
}

type State = {
  fullName: String,
  email: String,
  confirmedEmail: String,
  nameErrMsg: ?String,
  emailErrMsg: ?String,
  confirmEmailMsg: ?String,
}

export class RequestInviteDialog extends PureComponent<Props, State> {
  constructor(props: Props) {
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

  componentWillUnmount() {
    this.props.resetRequestInviteDialog();
  }

  onNameChanged = (e) => {
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

  onEmailChanged = (e) => {
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
    if (!err && text === this.state.confirmedEmail) {
      state = {...state, confirmEmailMsg: null}
    }
    this.setState(state);
  }

  onConfirmedEmailChanged = (e) => {
    const text = e.target.value;
    let err;
    if (!text.length) {
      err = 'Please input an Email address';
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
  
  renderInputDialog = () => 
  (
    <div className={styles.dialog}>
      <div className={styles.dialogTitle}>
        Request an invite
      </div>
      <Input
        placeholder="Full Name"
        onEmitUpdates={this.onNameChanged}
        errMsg={this.state.nameErrMsg}
      />
      <Input
        placeholder="Email"
        onEmitUpdates={this.onEmailChanged}
        errMsg={this.state.emailErrMsg}
      />
      <Input
        placeholder="Confirm Email"
        shouldEmitUpdates={true}
        onEmitUpdates={this.onConfirmedEmailChanged}
        errMsg={this.state.confirmEmailMsg}
      />
    </div>
  )
  
  renderSuccessDialog = () => 
  (
    <div className={styles.dialog}>
      <div className={styles.dialogTitle}>
        All Done!
      </div>
      <div className={styles.successMsg}>
        You will be one of the first to experience Broccoli & Co. when we launch.
      </div>
    </div>
  )

  renderSendButton = () => {
    const isDisabled = !this.validateAllInputs();
    return (
      <Button 
        style={{width: '100%'}}
        isDisabled={isDisabled}
        onClick={this.onSend}>
        Send
      </Button>
    )
  }

  renderSendingButton = () => (
    <Button
      style={{width: '100%'}}
      isDisabled={true}
    >
      Sending, please wait...
    </Button>
  )

  renderOKButton = () => (
    <Button
      style={{width: '100%'}}
      onClick={this.props.onClose}>
      OK
    </Button>
  )

  renderServerError = (msg) => (
    <div className={styles.serverErrorMessage}>
      {msg}
    </div>
  )
  
  validateAllInputs = () => {
    if (this.state.fullName && this.state.email && this.state.confirmedEmail === this.state.email && 
      !this.state.nameErrMsg && !this.state.emailErrMsg && !this.state.confirmEmailMsg) {
        return true
      }
    return false;
  }

  render() {
    let contentRenderer, buttonRenderer, enableCloseModal = true;
    switch (this.props.dialogStatus) {
      case DIALOG_STATE.initial:
        contentRenderer = this.renderInputDialog;
        buttonRenderer = this.renderSendButton;
        break;
      case DIALOG_STATE.loading:
        contentRenderer = this.renderInputDialog
        buttonRenderer = this.renderSendingButton;
        enableCloseModal = false;
        break;
      case DIALOG_STATE.success:
        contentRenderer = this.renderSuccessDialog
        buttonRenderer = this.renderOKButton;
        break;
      case DIALOG_STATE.error:
        contentRenderer = this.renderInputDialog;
        buttonRenderer = this.renderSendButton
        break;
      default:
        break;
    }

    return (
      <Modal onClick={ enableCloseModal ? this.props.onClose : null}>
        {contentRenderer && contentRenderer()}
        {buttonRenderer && buttonRenderer()}
        {this.props.dialogMessage && this.renderServerError(this.props.dialogMessage)}
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  dialogStatus: getRequestDialogStatus(state),
  dialogMessage: getRequestDialogMessage(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  requestInvite,
  resetRequestInviteDialog
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(RequestInviteDialog);