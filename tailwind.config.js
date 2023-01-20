module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "brand": ['RickAndMorty', "monospace"],
        "satoshi": ["Satoshi", "sans-serif"]
      },
      colors: {
        brand: {
          green: {
            DEFAULT: "#97CE4C"
          },
          yellow: {
            DEFAULT: "#F0E14A"
          },
          pink: {
            DEFAULT: "#E89AC7"
          },
          brown: {
            DEFAULT: "#44281D"
          },
        },
      },
      ringColor: {
        DEFAULT: "#97CE4C"
      }
    },
  },
  plugins: [],
}
