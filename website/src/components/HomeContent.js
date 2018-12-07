import React, { PureComponent } from 'react';
import styles from './HomeContent.module.scss';
import { RequestInviteDialog } from '.';
import { Button } from '../basicComponents';


export default class HomeContent extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      showDialog: false
    }
  }

  onRequestInviteClicked = () => {
    this.setState({
      showDialog: true
    })
  }
  onDialogSendClicked = () => {
    this.setState({
      showDialog: false
    })
  }

  onDialogCloseClicked = () => {
    this.setState({
      showDialog: false
    })
  }
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>
          A Better Way to enjoy every day.
        </h1>
        <div className={styles.content}> 
          Be the first to know when we launch.
        </div>
        <Button onClick={this.onRequestInviteClicked}>
          Request an invite
        </Button>
       {this.state.showDialog && 
        <RequestInviteDialog
          onClose={this.onDialogSendClicked}
          onSend={this.onDialogCloseClicked}
        />}
      </div>
    )
  }
}