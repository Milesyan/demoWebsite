import React, { PureComponent } from 'react';
import { Header, Footer, HomeContent } from '../components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Home.css'
class Home extends PureComponent {

  render() {
    return (
      <div className="container">
        <Header/>
        <HomeContent/>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userInfo: state.userInfo
})

const mapDispatchToProps = dispatch => bindActionCreators({
  // submitUserInfo: 
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);