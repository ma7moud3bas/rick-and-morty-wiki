module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {

    extend: {
      fontFamily: {
        "brand": ["RickAndMorty", "monospace"],
        "satoshi": ["Satoshi", "sans-serif"]
      },

      colors: {
        brand: {
          light: {
            DEFAULT: "#E8E8E8"
          },
          dark: {
            DEFAULT: "#212427"
          },
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
          blue: {
            DEFAULT: "#00B0C7"
          }
        },
      },
      height: {
        hero: "calc(100vh - 80px)"
      },
      minHeight: {
        hero: "calc(100vh - 80px)"
      },
      ringColor: {
        DEFAULT: "#97CE4C"
      }
    },
  },
  plugins: [],
}
