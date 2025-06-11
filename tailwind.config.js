// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
      },
    },
  },
  // make sure content includes all JSX/JS/TS files
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
}
