import Link from 'next/link';
import React from 'react'

export default function Navigation() {
    return (

        <div className="navigation">
        <div><Link href="/index"><div className="normal">Home</div></Link></div>
        <div><Link href="/blog"><div className="normal">Projects</div></Link></div>
        <div><Link href="/contact"><div className="normal">Socials</div></Link></div>
      </div>

    );
  }