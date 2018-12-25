import React, { PureComponent } from 'react';
import { Header, Footer, Previews, InitialPage, ProcessPhotos } from '../components';
import styles from './Home.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getHomeStatus } from '../selectors/Home';
import { HOME_STATUS } from '../reducers/Home';
import { checkToken } from '../actions/Login';
type Props = {
  status: HOME_STATUS
}
export class Home extends PureComponent<Props> {

  componentWillMount() {
    this.props.checkToken()
  }
  
  render() {
    return (
      <div className={styles.container}>
        <Header/>
        {this.props.status === HOME_STATUS.initial && <InitialPage />}
        {this.props.status === HOME_STATUS.preview && <Previews/>}
        {this.props.status === HOME_STATUS.process && <ProcessPhotos/>}
        {/*<Footer/>*/}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  status: getHomeStatus(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  checkToken
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);