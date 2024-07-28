import React from 'react';
import styles from '../styles/homelayout.module.css';
import Navigation from './navigation';
import Link from 'next/link';
import AlternateTimeline from '../components/timelinemui';
import Footer from './footer';

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

        {showTimeline && (
        <div className={styles.timeline}>
          <div className={styles.tlbox}>
            <AlternateTimeline />
          </div>
          </div>
        )}

        {showContbox && (
        <div className={styles.contbox}>
          {children}
        </div>
        )}

        <Footer />

      </div>
    );
  }