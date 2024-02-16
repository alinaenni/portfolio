import React from 'react'
import styles from '../styles/homelayout.module.css';

  export default function Intronormal({ children }) {
    return (
      <div className={styles.introtext2}>
        {children}
      </div>
    );
  }