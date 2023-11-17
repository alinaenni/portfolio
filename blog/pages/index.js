import Head from 'next/head';
import styles from '../styles/homelayout.module.css';
import Link from 'next/link';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';


export default function HomeLayout() {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Portfolio | Alina Rouvinen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.backgroundContainer}>

        <div className={styles.headerbox}>
          <div className="navbar">
            <div className="name">
              Supersymmetry
            </div>
            <div className="navigation">
              <div><Link href="/index"><div className="active">Home</div></Link></div>
              <div><Link href="/blog"><div className="normal">Blog</div></Link></div>
              <div><Link href="/contact"><div className="normal">Contact</div></Link></div>
            </div>
          </div>

          <div className={styles.introtext}>
            Welcome!<br />
            My name is Alina, and this is my
            <TypeAnimation 
              sequence={[' professional portfolio.', 3000, ' personal blog.', 3000, ' dynamic curriculum vitae.', 3000]}
              speed={80}
              repeat={Infinity}
            /><br />

            <p>I named this place <i>Supersymmetry</i> because I am fascinated by particle physics and because I simply like the word.</p>

          </div>
        </div>

        <div className={styles.me}>
          <div className={styles.info}>
          <h1>
          nMy academic background is in linguistics and phonetics, 
          but I have always been interested in web development and design. I 
          currently work as a technical writer.</h1>
          </div>
          <div className={styles.pic}>
          </div>
        </div>
        
        <footer>
          <p>Web design by Alina</p>
          <p>Background image by <a href="https://www.pexels.com/@shtefutsa/">Andras Stefuca</a></p>
        </footer>
  </div>
</div>
  );
}
