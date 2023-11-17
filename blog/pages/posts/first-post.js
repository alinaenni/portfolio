import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Bloglayout from '../../components/Blog';

export default function Blog() {
  return (
    <Bloglayout>
        <Head>
            <title>First Post</title>
      </Head>

      <h1>Catch me or I go Houdini</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

    </Bloglayout>
  );
}
