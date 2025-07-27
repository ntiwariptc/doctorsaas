import tailwind from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

/** @type {import('postcss').Config} */
const config = {
  plugins: [tailwind, autoprefixer],
};

export default config;
