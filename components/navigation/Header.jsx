import gsap from "gsap";
import cn from "classnames";
import { useCallback, useEffect, useState } from "react";
import Menu from "components/navigation/Menu";
import MenuToggle from "components/navigation/MenuToggle";
import { useSplashContext } from "contexts/SplashContext";
import { uncloak } from "utils";

import Logo from "../../assets/logo.svg";

function Header() {
  const [isShown, setIsShown] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { splashAnimationEnded } = useSplashContext();

  const handleScroll = useCallback(() => {
    const scrollThreshold = 45;
    const dy = window.pageYOffset || document.documentElement.scrollTop;
    setIsSticky(dy >= scrollThreshold);
    setIsShown(dy < lastScrollTop);
    setLastScrollTop(dy <= 0 ? 0 : dy);
  }, [lastScrollTop]);

  useEffect(() => {
    if (isMenuVisible) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [isMenuVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (splashAnimationEnded) {
      uncloak("#header");
      gsap.from(gsap.utils.toArray(".menu-item"), {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.1,
        stagger: 0.1,
      });

      gsap.from(".logo", {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power4.out",
      });
    }
  }, [splashAnimationEnded]);

  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
    document.getElementById("content").classList.toggle("blur-sm");
  };

  return (
    <header id="header">
      <div
        className={cn(
          "transform transition-all bg-navy text-primary duration-700 flex justify-between items-center p-5 fixed top-0 inset-x-0 z-30",
          "lg:w-auto",
          {
            "-translate-y-full drop-shadow-none": !isShown && isSticky,
            "drop-shadow-xl": isSticky,
            "bg-transparent": isMenuVisible,
          }
        )}
      >
        <Logo className="cloak logo h-12" />
        <Menu className="hidden lg:flex" isVisible={isMenuVisible} />
        <MenuToggle onClick={handleClick} />
      </div>

      <Menu className="lg:hidden" isVisible={isMenuVisible} />
    </header>
  );
}

export default Header;
