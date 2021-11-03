import gsap from "gsap";
import { useEffect } from "react";
import { useSplashContext } from "contexts/SplashContext";
import { uncloak } from "utils";

function Splash() {
  const { onSplashAnimationEnded } = useSplashContext();

  useEffect(() => {
    uncloak("#splash");

    gsap
      .timeline({
        onComplete: onSplashAnimationEnded,
      })
      .from("#hexagon", {
        strokeDashoffset: 1790,
        delay: 0.5,
        duration: 4,
        ease: "power2.in",
      })
      .from("#letter", {
        opacity: 0,
        duration: 1.2,
      })
      .to("#splash-logo", {
        scale: 0,
        duration: 0.8,
        opacity: 0,
        ease: "power4.out",
      })
      .to("#splash", { opacity: 0, duration: 0.6, delay: -0.4 })
      .set("#splash", { display: "none" });
  }, []);
  return (
    <div
      id="splash"
      className="flex justify-center items-center bg-dark-navy fixed inset-0 z-40"
    >
      <svg
        id="splash-logo"
        className="cloak h-24 text-primary"
        viewBox="0 0 434 501"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="hexagon"
          d="M10.1714 131.002L216.678 11.775L423.184 131.002V369.455L216.678 488.681L10.1714 369.455V131.002Z"
          style={{ strokeDasharray: 1790, strokeDashoffset: 0 }}
          stroke="currentColor"
          strokeWidth="20"
        />
        <path
          id="letter"
          d="M228.223 149.625C236.785 149.625 244.137 150.706 250.277 152.868C256.504 154.944 261.693 157.408 265.844 160.262C269.995 163.03 273.195 165.841 275.444 168.695C277.693 171.549 279.12 173.754 279.725 175.311C280.071 176.089 280.244 176.781 280.244 177.386C280.33 177.905 280.374 178.381 280.374 178.813C280.374 179.851 280.114 180.586 279.595 181.019C279.163 181.451 278.601 182.23 277.909 183.354C277.39 184.219 276.784 184.824 276.093 185.17C275.487 185.516 274.795 185.819 274.017 186.078C273.325 186.338 272.633 186.684 271.941 187.116C271.336 187.462 270.817 188.067 270.385 188.932C269.001 191.527 267.055 192.824 264.547 192.824C263.077 192.824 261.65 192.392 260.266 191.527C258.882 190.575 257.325 189.408 255.596 188.024C253.866 186.64 251.834 185.127 249.499 183.484C247.25 181.84 244.439 180.327 241.066 178.943C237.78 177.559 233.845 176.435 229.261 175.57C224.678 174.619 219.229 174.143 212.916 174.143C205.997 174.143 199.9 175.224 194.624 177.386C189.435 179.462 184.592 182.576 180.095 186.727C176.203 190.359 173.262 194.208 171.273 198.272C169.371 202.337 168.419 206.272 168.419 210.078C168.419 214.488 169.846 218.51 172.7 222.142C174.776 224.737 177.846 227.288 181.911 229.796C186.062 232.304 190.473 234.682 195.143 236.931C199.9 239.18 204.527 241.255 209.024 243.158C213.608 244.974 217.326 246.531 220.18 247.828C222.688 248.952 224.332 250.077 225.11 251.201C225.975 252.325 226.407 253.493 226.407 254.704C226.407 256.001 226.148 257.385 225.629 258.855C225.196 260.239 224.98 261.666 224.98 263.136C224.98 263.828 225.067 264.476 225.24 265.082C225.413 265.687 225.499 266.293 225.499 266.898C225.499 268.282 225.067 269.493 224.202 270.53C223.424 271.482 222.342 272.346 220.959 273.125C219.661 273.903 218.148 274.595 216.418 275.2C214.689 275.806 212.959 276.368 211.229 276.887C208.721 277.665 205.521 278.79 201.629 280.26C197.738 281.73 193.976 283.719 190.343 286.227C186.711 288.649 183.597 291.676 181.003 295.308C178.408 298.941 177.111 303.351 177.111 308.54C177.111 312 177.846 315.243 179.316 318.27C180.787 321.297 182.862 323.978 185.543 326.313C188.311 328.561 191.597 330.334 195.403 331.632C199.208 332.929 203.402 333.578 207.986 333.578C218.451 333.578 227.921 331.286 236.396 326.702C244.872 322.118 251.834 315.848 257.282 307.892C258.493 306.162 259.92 303.697 261.563 300.497C263.293 297.211 265.109 293.233 267.012 288.562C267.444 287.525 268.006 286.746 268.698 286.227C269.39 285.622 270.082 285.319 270.774 285.319C271.293 285.319 271.725 285.535 272.071 285.968C272.504 286.314 272.72 286.833 272.72 287.525C272.72 288.216 272.331 289.687 271.552 291.935C270.774 294.097 269.693 296.692 268.309 299.719C266.925 302.659 265.239 305.859 263.25 309.319C261.347 312.778 259.271 316.108 257.023 319.308C253.909 323.718 250.277 327.87 246.126 331.761C242.061 335.567 237.607 338.896 232.764 341.75C228.007 344.604 222.905 346.81 217.456 348.366C212.008 350.01 206.3 350.831 200.332 350.831C194.97 350.831 189.565 350.053 184.116 348.496C178.668 347.026 173.695 344.777 169.198 341.75C164.787 338.723 161.155 334.875 158.301 330.205C155.533 325.535 154.149 320.043 154.149 313.729C154.149 307.416 155.36 302.011 157.782 297.514C160.203 292.93 163.187 289.081 166.733 285.968C170.365 282.854 174.257 280.303 178.408 278.314C182.646 276.325 186.538 274.725 190.084 273.514C193.716 272.217 196.743 271.179 199.165 270.401C201.586 269.622 202.797 268.844 202.797 268.066C202.797 267.46 202.148 266.855 200.851 266.249C199.64 265.557 197.997 264.822 195.921 264.044C193.932 263.179 191.64 262.228 189.046 261.19C186.451 260.152 183.814 258.898 181.133 257.428C176.808 255.093 172.917 252.628 169.457 250.033C165.998 247.439 163.014 244.628 160.506 241.601C158.084 238.488 156.225 235.115 154.928 231.483C153.63 227.764 152.982 223.656 152.982 219.158C152.982 213.191 153.89 207.31 155.706 201.516C157.609 195.721 160.247 190.273 163.619 185.17C166.992 179.981 170.971 175.224 175.554 170.9C180.224 166.576 185.327 162.857 190.862 159.744C196.484 156.544 202.451 154.079 208.764 152.349C215.078 150.533 221.564 149.625 228.223 149.625Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

export default Splash;
