/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow:
              '0 14px 32px rgba(255,106,0,0.38), 0 0 0 0 rgba(255,106,0,0.35)',
          },
          '50%': {
            boxShadow:
              '0 18px 48px rgba(255,106,0,0.55), 0 0 0 8px rgba(255,106,0,0.12)',
          },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'drift': {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(-4%, 3%)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.45' },
        },
        'money-pulse': {
          '0%, 100%': { filter: 'drop-shadow(0 0 6px rgba(250, 204, 21, 0.9))' },
          '50%': { filter: 'drop-shadow(0 0 18px rgba(239, 68, 68, 0.95))' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.2s ease-in-out infinite',
        'float-slow': 'float-slow 5s ease-in-out infinite',
        'drift': 'drift 18s ease-in-out infinite alternate',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'money-pulse': 'money-pulse 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

