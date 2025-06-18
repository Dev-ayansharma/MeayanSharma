const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },

  theme: {
  extend: {
    blur: {
      '3xl': '100px',
    },
    colors: {
      neon: '#0fffc1',
    },
  },
},
theme: {
  extend: {
    backgroundImage: {
      'grid-dark': "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
    },
  },
},

  plugins: [],
}