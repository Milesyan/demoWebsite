import React, { PureComponent } from 'react';
import { Header, Footer, Previews } from '../components';
import styles from './Home.module.scss';

export default class Home extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <Header/>
        <Previews/>
        <Footer/>
      </div>
    )
  }
}