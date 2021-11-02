import Head from "next/head";
import Header from "components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Erratbi</title>
        <meta name="description" content="Here is my humble portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
