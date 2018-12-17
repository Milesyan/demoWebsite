import React, { PureComponent } from 'react';
import { Header, Footer, Previews, ProcessPhotos } from '../components';
import styles from './Home.module.scss';
import { connect } from 'react-redux';
import { getHomeStatus } from '../selectors/Home';
import { HOME_STATUS } from '../reducers/Home';
type Props = {
  status: HOME_STATUS
}
export class Home extends PureComponent<Props> {
  render() {
    return (
      <div className={styles.container}>
        <Header/>
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

export default connect(mapStateToProps, null)(Home);