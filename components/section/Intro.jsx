import gsap from "gsap";
import { useEffect } from "react";
import OutlinedButton from "components/misc/OutlinedButton";
import { useSplashContext } from "contexts/SplashContext";
import { uncloak } from "utils";

const Intro = () => {
  const { splashAnimationEnded } = useSplashContext();

  useEffect(() => {
    if (splashAnimationEnded) {
      uncloak("#intro");
      gsap.from(gsap.utils.toArray(".up-fade"), {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        delay: 1,
      });
    }
  }, [splashAnimationEnded]);

  return (
    <div id="intro" className="h-screen flex items-center">
      <div>
        <h5 className="up-fade cloak font-mono text-primary hidden md:block mb-2 lg:text-lg">
          Salut, je suis
        </h5>
        <h1 className="up-fade cloak font-bold text-lighter-slate text-4xl mb-2 sm:text-5xl sm:mb-3 lg:text-7xl">
          Erratbi Youssef
        </h1>
        <h2 className="up-fade cloak font-bold text-light-slate text-3xl mb-4 sm:text-5xl sm:mb-6 lg:text-6xl">
          Développeur Fullstack
        </h2>
        <p className="up-fade cloak mt-4 leading-relaxed sm:text-lg lg:text-xl lg:max-w-xl">
          Créer des choses pour le{" "}
          <span className="text-primary underline">web</span> et le{" "}
          <span className="text-primary underline">mobile</span>, est ma
          passion. Je vise toujours à offrir la meilleure expérience utilisateur
          dans tous mes travaux. Actuellement, je travail comme{" "}
          <span className="text-primary underline">freelanceur</span>
        </p>
        <OutlinedButton className="up-fade cloak mt-12 px-12 py-5 w-full md:w-auto">
          Découvrez mon travail
        </OutlinedButton>
      </div>
    </div>
  );
};

export default Intro;
