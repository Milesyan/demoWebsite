import React, { PureComponent } from 'react';
import styles from './HomeContent.module.scss';
import { RequestInviteDialog } from '.';
import { Button } from '../basicComponents';
import { connect } from 'react-redux';
import { showRequestInviteDialog, dismissRequestInviteDialog } from '../actions/Home';
import { bindActionCreators } from 'redux';
import { getShowRequestInviteDialogStatus } from '../selectors/Home';

type Props = {
  showDialog: boolean,
  showRequestInviteDialog: typeof showRequestInviteDialog,
  dismissRequestInviteDialog: typeof dismissRequestInviteDialog,
}

type State = {
}
export class HomeContent extends PureComponent<Props, State> {
  onRequestInviteClicked = () => {
    this.props.showRequestInviteDialog();
  }

  onDialogCloseClicked = () => {
    this.props.dismissRequestInviteDialog();
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
       {this.props.showDialog && 
        <RequestInviteDialog
          onClose={this.onDialogCloseClicked}
        />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  showDialog: getShowRequestInviteDialogStatus(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  showRequestInviteDialog,
  dismissRequestInviteDialog
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContent);