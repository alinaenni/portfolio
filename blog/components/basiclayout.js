import React from 'react';
import styles from '../styles/homelayout.module.css';
import Navigation from './navigation';
import Link from 'next/link';
import AlternateTimeline from '../components/timelinemui';

export default function Basiclayout({ introText, children, showTimeline, showContbox }) {
    return (
      <div className={styles.backgroundContainer}>
        <div className={styles.headerbox}>
          <div className="navbar">
            <div className="name"><Link href="/">Supersymmetry</Link></div>
            <Navigation />
          </div>
          <div className={styles.introTextContainer}>{introText}</div>
        </div>

        {showContbox && (
        <div className={styles.contbox}>
          {children}
        </div>
        )}

        {showTimeline && (
        <div className={styles.timeline}>
          <AlternateTimeline />
          </div>
        )}

      </div>
    );
  }