module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}", "./styles/**/*.{css}"],
  theme: {
    extend: {
      colors: {
        blue: "#203261",
        blue2: "#2a407b",
        blueSky: "#3d60b9",
        green: "#51b58b",
        darkGreen: "#019457",
      },
      fontFamily: {
        quick: "quick",
      },

      screens :{
        tab : "926px"
      }
    },
  },
  plugins: [],
}
