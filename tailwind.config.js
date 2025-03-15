/** @type {import('tailwindcss').Config} */
import preset from '@lynx-contrib/tailwind-preset';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [preset],
  theme: {
    extend: {},
  },
  plugins: [],
};
