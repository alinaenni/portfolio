import React from 'react'
import styles from '../styles/homelayout.module.css';
import { TypeAnimation } from 'react-type-animation';

export default function Introtext() {
    return (

      <div className={styles.introtext}>
            
        <h3>Good, you're here</h3>
          I'm Alina, and I'm the creator of this place. Go on, take a look around my

        <TypeAnimation 
          sequence={[' professional portfolio.', 3000, ' personal blog.', 3000, ' dynamic curriculum vitae.', 3000, ' pet project.', 3000]}
          speed={120}
          repeat={Infinity}
        />
     </div>

    );
  }