import Link from 'next/link';
import React from 'react'
import styles from '../styles/homelayout.module.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (

      <footer className={styles.footer}>
        <Link target="_blank" href="https://www.linkedin.com/in/alina-rouvinen/"><LinkedInIcon style={{ fontSize: '4.2rem', color: '#c7c7c7' }} /></Link>
        <p>Web design by Alina Rouvinen 2024</p>
      </footer>

    );
  }