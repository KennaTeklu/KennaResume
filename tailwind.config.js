/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f6ff',
          purple: '#ff00f6',
          pink: '#ff0066',
          green: '#00ff66'
        },
        cyber: {
          black: '#0a0a0f',
          darker: '#13131A',
          dark: '#1A1A23',
          mid: '#252532',
          light: '#353542',
          accent: '#454557'
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'glow-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'mesh-gradient': 'radial-gradient(at 50% 50%, rgba(0, 246, 255, 0.1) 0px, transparent 50%), radial-gradient(at 0% 0%, rgba(255, 0, 246, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 255, 102, 0.1) 0px, transparent 50%)'
      },
      animation: {
        'glow': 'glow 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 246, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(255, 0, 246, 0.5)',
        'neon-green': '0 0 20px rgba(0, 255, 102, 0.5)'
      }
    }
  },
  plugins: []
};