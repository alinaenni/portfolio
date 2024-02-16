import React from 'react';
import Head from 'next/head';
import styles from '/styles/homelayout.module.css';
import Basiclayout from '../../components/basiclayout';
import Intronormal from '../../components/intronormal';
import Link from 'next/link';

export default function Projectspage() {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Projects | Alina Rouvinen</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Basiclayout introText={<Intronormal>
        <h3>Projects and posts</h3>
        See what I've been up to recently</Intronormal>}>
        {/* Page content */}
      </Basiclayout>
      
    </div>
  );
}