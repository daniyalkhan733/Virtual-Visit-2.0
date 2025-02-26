/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        extend: {
          colors: {
            vvlight: '#7FD1E0',  // Light blue from logo top
            vvmedium: '#6A96D7', // Medium blue from logo middle
            vvdark: '#896AD7',   // Purple from logo bottom
          }
        }
      },
	plugins: [],
}
