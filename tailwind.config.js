/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "800px",
      lg: "1000px",
      xl: "1440px",
    },
    extend: {
      gridTemplateColumns:{
        '2':'repeat(auto-fit, minmax(300px, 1fr))'
      },
    
      backgroundImage: {
        lgStories: "url('/images/stories/desktop/moon-of-appalacia.jpg')",
        mdStories: "url('/images/stories/tablet/moon-of-appalacia.jpg')",
        smStories: "url('/images/stories/mobile/moon-of-appalacia.jpg')",
        ctaDesktopImage: "url('/images/shared/desktop/bg-beta.jpg')",
        ctaTabletImage: "url('/images/shared/tablet/bg-beta.jpg')",
        ctaMobileImage: "url('/images/shared/mobile/bg-beta.jpg')",
        StoriesPage:"url('/images/desktop/moon-of-appalacia.jpg')",
        borderImage:'linear-gradient(126deg, #4d67dc 10%, #983e6d 88%)'
      },
      fontFamily: { sans: ["DM Sans", "sans-serif"] },
    },
  },
  plugins: [],
};
