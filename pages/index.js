import Head from "next/head";
import Header from "components/navigation/Header";
import Intro from "components/section/Intro";

export default function Home() {
  return (
    <>
      <Head>
        <title>Erratbi</title>
        <meta name="description" content="Here is my humble portfolio" />
      </Head>

      <div id="main">
        <Header />
        <div
          id="content"
          className="lg:blur-none transition px-5 lg:max-w-4xl xl:max-w-5xl mx-auto"
        >
          <Intro />
        </div>
      </div>
    </>
  );
}
