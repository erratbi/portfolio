import Head from 'next/head';
import Header from 'components/navigation/Header';
import Intro from 'components/section/Intro';
import Splash from 'components/misc/Splash';
import SplashContextProvider from 'contexts/SplashContext';
import About from 'components/section/About';

export default function Home() {
  return (
    <SplashContextProvider>
      <Splash />
      <Head>
        <title>Erratbi</title>
        <meta name="description" content="Here is my humble portfolio" />
      </Head>

      <div id="main">
        <Header />
        <div id="content" className="lg:blur-none transition px-5 lg:max-w-4xl xl:max-w-5xl mx-auto">
          <Intro />
          <About className="mt-20 mb-20" />
        </div>
      </div>
    </SplashContextProvider>
  );
}
