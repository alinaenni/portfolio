import React from 'react';
import Head from 'next/head';
import styles from '../styles/homelayout.module.css';
import Basiclayout from '../components/basiclayout';
import Introtext from '../components/introtext';
import Link from 'next/link';

export default function Indexpage() {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Portfolio | Alina Rouvinen</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Basiclayout introText={<Introtext />} showGallery={false} showTimeline={true}>
      </Basiclayout>
      
      <footer>
      <p>Web design Alina Rouvinen 2024</p>
      </footer>
    </div>
  );
}