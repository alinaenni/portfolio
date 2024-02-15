import Head from 'next/head';
import styles from '../styles/homelayout.module.css';
import Link from 'next/link';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import AlternateTimeline from '../components/timelinemui';
        
export default function HomeLayout() {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Portfolio | Alina Rouvinen</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <div className={styles.backgroundContainer}>

        <div className={styles.headerbox}>
          <div className="navbar">
            <div className="name">
              Supersymmetry
            </div>
            <div className="navigation">
              <div><Link href="/index"><div className="active">Home</div></Link></div>
              <div><Link href="/blog"><div className="normal">Projects</div></Link></div>
              <div><Link href="/contact"><div className="normal">Socials</div></Link></div>
            </div>
          </div>

          <div className={styles.introtext}>
            <h3>Hi there, nice to meet you</h3>
            My name is Alina. I named this site after the concept of supersymmetry because I love 
            learning about particle physics. And because it's a cool word.<br /><br />
  
            This is my
            <TypeAnimation 
              sequence={[' professional portfolio.', 3000, ' personal blog.', 3000, ' dynamic curriculum vitae.', 3000]}
              speed={80}
              repeat={Infinity}
            />
          </div>
        </div>

        <div className={styles.timeline}>
          <AlternateTimeline />
        </div>
        
        <footer>
          <p>Web design by Alina Rouvinen 2024</p>
        </footer>
  </div>
</div>
  );
}
