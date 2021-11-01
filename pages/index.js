import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Erratbi</title>
        <meta name="description" content="Here is my humble portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-screen flex justify-center items-center">
        Hello world
      </div>
    </>
  );
}
