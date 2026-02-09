/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          indigo: {
            50:  "#f6edf6",
            100: "#ead3ea",
            200: "#d6a8d6",
            300: "#c27dc2",
            400: "#982598", 
            500: "#861f84",
            600: "#741970",
            700: "#5f145c",
            800: "#4a0f47",
            900: "#360a33",
          },
        },
      },
    },
    plugins: [],
  };
  