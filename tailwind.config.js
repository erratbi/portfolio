module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: "PT sans",
        mono: "PT Mono",
      },
      colors: {
        "dark-navy": "#020c1b",
        navy: "#0a192f",
        "light-navy": "#112240",
        "lighter-navy": "#233554",
        "navy-shadow": "rgba(2,12,27,0.7)",
        "dark-slate": "#495670",
        slate: "#8892b0",
        "light-slate": "#a8b2d1",
        "lighter-slate": "#ccd6f6",
        white: "#e6f1ff",
        green: "#64ffda",
        "green-tint": "rgba(100,255,218,0.1)",
      },
      transitionTimingFunction: {
        easing: "cubic-bezier(0.645,0.045,0.355,1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
