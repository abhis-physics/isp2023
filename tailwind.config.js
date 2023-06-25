/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.html', './app/**/*.svelte'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#c4b5fd",
          "secondary": "#7c3aed",
          "accent": "#7e22ce",
          "neutral": "#272930",
          "base-100": "#1f2937",
          "base-200": "#2a3441",
          "info": "#22d3ee",
          "success": "#34d399",
          "warning": "#facc15",
          "error": "#f03365",
        },
      },
    ],
  },
}

