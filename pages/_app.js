import "../styles/globals.scss";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const cloaked = document.querySelectorAll(".cloak");
    cloaked.forEach((el) => el.classList.remove("cloak"));
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
