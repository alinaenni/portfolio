import React from 'react';
import Head from 'next/head';
import styles from '/styles/homelayout.module.css';
import Basiclayout from '../../components/basiclayout';
import Intronormal from '../../components/intronormal';
import Link from 'next/link';

export default function Socialspage() {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Socials | Alina Rouvinen</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Basiclayout introText={<Intronormal>
        <h3>Want to get in touch?</h3>
        </Intronormal>} showContbox={true} showTimeline={false}>
       
        <div className={styles.contbg2}>
          <div className={styles.textbox}>
            Some text here
        </div></div>

      </Basiclayout>
      <footer>
      <p>Web design Alina Rouvinen 2024</p>
      </footer>
    </div>
  );
}