import React from 'react';
import Head from 'next/head';
import styles from '/styles/homelayout.module.css';
import Basiclayout from '../../components/basiclayout';
import Intronormal from '../../components/intronormal';
import Project from '../../components/projectbox'
import Link from 'next/link';
import Gallery from '../../components/gallery-comp';

export default function Projectspage() {
  return (
    <div className={styles.pageContainer}>
      <Head>
        <title>Designs | Alina Rouvinen</title>
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
        <h3>Design projects and drafts</h3>
        </Intronormal>} showContbox={true} showTimeline={false}>
        
          <div className={styles.textbox}>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
              graphic or web designs. The passage is attributed to an unknown typesetter in the 15th 
              century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum 
              for use in a type specimen book. It usually begins with.</p>

            <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their 
              dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their 
              software. Today it's seen all around the web; on templates, websites, and stock designs. Use our 
              generator to get your own, or read on for the authoritative history of lorem ipsum.</p>
          </div>

          <Project />

      </Basiclayout>

    </div>
  );
}