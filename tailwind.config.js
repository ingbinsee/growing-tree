/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,jsx}'];
export const theme = {
  extend: {
    colors: {
      primary: 'rgb(48 77 48 / 0.8)',
      secondary: '#516F50',
      positive: '#60789C',
      negative: '#B2595D',
      warning: '#FFD600',
      focus: '#1560BD',
      contentPrimary: '#000000',
      contentSecondary: '#FFFFFF',
      contentTertiary: '#6B6B6B',
      contentQuaternary: '#A6A6A6',
      borderDefault: '#898989',
      gray500: '#6B6B6B',
      gray400: '#898989',
      gray300: '#A6A6A6',
      gray200: '#C4C4C4',
    },
    fontFamily: {
      pretendard: ['Pretendard', 'sans-serif'],
    },
    fontSize: {
      small: '12px',
      medium: '16px',
      large: '21.3px',
      xl: '28.4px',
      '2xl': '37.9px',
      '3xl': '50.5px',
      '4xl': '67.3px',
      '5xl': '89.8px',
    },
    fontWeight: {
      heading: ['700'],
      label: ['600'],
      paragraph: ['400'],
    },
    gap: {
      'gap-base': '12px',
    },
  },
};
export const plugins = [];
