import { useState, createContext, useContext } from "react";

const SplashContext = createContext({ splashAnimationEnded: false });
export const useSplashContext = () => useContext(SplashContext);

function SplashContextProvider({ children }) {
  const [splashAnimationEnded, setSplashAnimationEnded] = useState(false);

  function onSplashAnimationEnded() {
    setSplashAnimationEnded(true);
  }

  return (
    <SplashContext.Provider
      value={{ splashAnimationEnded, onSplashAnimationEnded }}
    >
      {children}
    </SplashContext.Provider>
  );
}

export default SplashContextProvider;
