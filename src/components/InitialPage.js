import React, { Component } from 'react';
import styles from './InitialPage.module.scss';
import { Button, Input } from '../basicComponents';
import { connect } from 'react-redux';
import { queryBabyData } from '../actions/Photos';
import { setHomeStatusPreview } from '../actions/Home';
import { bindActionCreators } from 'redux';
import { getPhotos } from '../selectors/Photos';


type Props = {
  queryBabyData: typeof queryBabyData
}

type State = {
  babyId: String
}

export class Initial extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      babyId: null
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    // if (this.props.photos !== prevProps.photos) {
    //   const photoLoaded = !Object.values(this.props.photos).map(p=>p.width && p.height).includes(null)
    //   if (photoLoaded) {
    //     this.props.setHomeStatusProcess()
    //   }
    // }
  }
  
  onChange = (e) => {
    this.setState({
      babyId: e.target.value
    })
  }

  getBabyData = () => {
    const babyId = this.state.babyId;
    if (!babyId) {
      return;
    }
    this.props.queryBabyData(babyId);
  }

  debugLayout = () => {
    this.props.setHomeStatusPreview();
  }

  render() {
    return (
      <div className={styles.container} >
        <input
          className={styles.input}
          style={{width: '30%', marginTop: '20%'}}
          placeholder="Baby ID"
          onChange={this.onChange}
          type="number"
        />
        <Button onClick={this.getBabyData}>
          Confirm
        </Button>
        <Button onClick={this.debugLayout}>
          Debug Layout
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  photos: getPhotos(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  queryBabyData,
  setHomeStatusPreview
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Initial);