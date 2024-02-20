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
            
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
              graphic or web designs. The passage is attributed to an unknown typesetter in the 15th 
              century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum 
              for use in a type specimen book. It usually begins with.</p>

            <p>The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, 
              page, etc.) that doesn't distract from the layout. A practice not without controversy, laying 
              out pages with meaningless filler text can be very useful when the focus is meant to be on design, 
              not content.</p>

            <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their 
              dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their 
              software. Today it's seen all around the web; on templates, websites, and stock designs. Use our 
              generator to get your own, or read on for the authoritative history of lorem ipsum.</p>

        </div></div>

      </Basiclayout>
      <footer>
      <p>Web design Alina Rouvinen 2024</p>
      </footer>
    </div>
  );
}