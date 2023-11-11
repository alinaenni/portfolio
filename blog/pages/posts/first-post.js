import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Catch me or I go Houdini</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}