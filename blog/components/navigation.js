import Link from 'next/link';
import React from 'react'

export default function Navigation() {
    return (

        <div className="navigation">
        <div><Link href="/"><div>Home</div></Link></div>
        <div><Link href="/posts/projects"><div>Projects</div></Link></div>
        <div><Link href="/posts/socials"><div>Socials</div></Link></div>
      </div>

    );
  }