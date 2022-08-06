import '../styles/global.css';

// I can import global CSS files only inside pages/_app.js
// top-level component which will be common across all the different pages.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
