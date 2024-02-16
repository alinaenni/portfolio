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
        Check out my socials or send a message</Intronormal>}>
        {/* Page content */}
      </Basiclayout>
      
    </div>
  );
}