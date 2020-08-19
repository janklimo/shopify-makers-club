import "whatwg-fetch";
import { AppProps } from "next/app";

import "../styles/index.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
