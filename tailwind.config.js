module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FDC435",
        success: "#5cb85c",
        failure: "#ed4337",
      },
      height: {
        128: "32rem",
        256: "64rem",
      },
    },
  },
  plugins: [],
};
