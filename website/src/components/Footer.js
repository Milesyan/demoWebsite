import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.container}>
    <div style={{marginBottom: 4}}>Made with <span role="img" aria-label="emoji-love">❤️</span> in Melbourne</div>
    <div>@ 2016 Broccoli & Co. All rights reserved.</div>
  </div>
)

export default Footer;