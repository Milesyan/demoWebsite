import React, { PureComponent } from 'react'
import { login } from '../actions/Login';
import { Modal, Input, Button } from '../basicComponents';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

type Props = {
  login: typeof Login
}
export class LoginDialog extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
  }

  onUserNameChanged = (e) => {
    const name = e.target.value;
    this.setState({userName: name});
  }

  onPasswordChanged = (e) => {
    const pwd = e.target.value;
    this.setState({password: pwd});
  }

  logIn = () => {
    const { userName, password } = this.state;
    if (!userName || !password) {
      alert("input user name and password好吗？")
      return;
    }
    this.props.login(userName, password);
  }

  render() {
    return (
      <Modal>
        <div style={{marginBottom: 24}}>
          Input Admin User Name and Password
        </div>
        <Input placeholder="User Name" onEmitUpdates={this.onUserNameChanged}/>
        <Input placeholder="Password" onEmitUpdates={this.onPasswordChanged}/>
        <Button onClick={this.logIn}>
          Confirm
        </Button>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  login
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);