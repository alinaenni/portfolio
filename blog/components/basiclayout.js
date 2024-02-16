import React from 'react';
import styles from '../styles/homelayout.module.css';
import Navigation from './navigation';

export default function Basiclayout({ introText, children }) {
    return (
      <div className={styles.backgroundContainer}>
        <div className={styles.headerbox}>
          <div className="navbar">
            <div className="name">Supersymmetry</div>
            <Navigation />
          </div>
          <div className={styles.introTextContainer}>{introText}</div>
        </div>
        
        <div className={styles.timeline}>{children}</div>

        <footer>
          <p>Web design by Alina Rouvinen 2024</p>
        </footer>
      </div>
    );
  }