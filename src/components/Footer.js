import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.container}>
    <div style={{marginBottom: 4}}>Made with <span role="img" aria-label="emoji-love">❤️</span> for Miki</div>
    <div>@ 2018 Miles</div>
  </div>
)

export default Footer;