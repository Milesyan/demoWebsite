import React, { PureComponent } from 'react';
import { Header, Footer, HomeContent } from '../components';
import styles from './Home.module.scss';

export default class Home extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Header/>
        <HomeContent/>
        <Footer/>
      </div>
    )
  }
}