export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    animation: {
      float: 'float 6s ease-in-out infinite',
      'spin-slow': 'spin 20s linear infinite',
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
      },
    },
  },
};
export const plugins = [];
