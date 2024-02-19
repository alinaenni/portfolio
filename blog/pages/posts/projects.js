import React from 'react';
import Head from 'next/head';
import styles from '/styles/homelayout.module.css';
import Basiclayout from '../../components/basiclayout';
import Intronormal from '../../components/intronormal';
import Link from 'next/link';
import Carousel from '../../components/carousel';

export default function Projectspage() {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Projects | Alina Rouvinen</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      </Head>

      <Basiclayout introText={<Intronormal>
        <h3>Projects and content</h3>
        </Intronormal>} showContbox={true} showTimeline={false}>
        
        <div className={styles.textbox}>
          
        <Carousel />

        </div>


      </Basiclayout>
      
    </div>
  );
}