import React from 'react'
import styles from '../styles/homelayout.module.css';
import { TypeAnimation } from 'react-type-animation';

export default function Introtext() {
    return (

      <div className={styles.introtext}>
            
      <h3>Hi there, nice to meet you</h3>
      My name is Alina. I named this site after the concept of supersymmetry because I love 
      learning about particle physics. And because it's a cool word.<br />

      This is my
      <TypeAnimation 
        sequence={[' professional portfolio.', 3000, ' personal blog.', 3000, ' dynamic curriculum vitae.', 3000, ' pet project.', 3000]}
        speed={80}
        repeat={Infinity}
      />
     </div>

    );
  }