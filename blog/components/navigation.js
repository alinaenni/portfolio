import Link from 'next/link';
import React from 'react'

export default function Navigation() {
    return (

        <div className="navigation">
        <div><Link href="/">Home</Link></div>
        <div><Link href="/posts/projects">Projects</Link></div>
        <div><Link href="/posts/socials">Socials</Link></div>
      </div>

    );
  }