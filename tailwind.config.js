import { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aegis-blue': '#1e40af',
        'aegis-cyan': '#00e5ff',
        'aegis-purple': '#8b5cf6',
        'aegis-dark': '#0f172a',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          'from': { boxShadow: '0 0 20px #00e5ff' },
          'to': { boxShadow: '0 0 30px #00e5ff, 0 0 40px #00e5ff' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
};