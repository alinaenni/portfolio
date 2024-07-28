import React from 'react'
import styles from '/styles/homelayout.module.css';

export default function Project() {
    return (

        <div>
            <div className={styles.projectbox}>
                <div className={styles.left}> </div>
                <div className={styles.right}>
                    <h1>Personal blog design</h1>
                    <p>Let's describe the theme here!</p>
                    <ul>
                        <li>Responsive design</li>
                        <li>Completely customisable</li>
                        <li>Built with React and Next.js</li>
                    </ul>
                </div>
            </div>

            <div className={styles.projectbox}>
                <div className={styles.right}>
                    <h1>Personal blog design</h1>
                    <p>Let's describe the theme here!</p>
                    <ul>
                        <li>Responsive design</li>
                        <li>Completely customisable</li>
                        <li>Built with React and Next.js</li>
                    </ul>
                </div>
                <div className={styles.left}> </div>
            </div>

        </div>

    );
  }