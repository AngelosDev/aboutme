import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/career">Career</Link>
      </li>
      <li>
        <Link href="/projects">Personal Projects</Link>
      </li>
      <li>
        <Link href="/meet-me">Meet Me</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
