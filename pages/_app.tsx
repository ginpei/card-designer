import { AppProps } from "next/app";
import { ReactElement } from "react";
import "../src/styles/main.scss";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
