import Amplify from "aws-amplify";
import { AppProps } from "next/app";
import { ReactElement } from "react";
import awsConfig from "../src/aws-exports";
import "../src/styles/main.scss";

Amplify.configure(awsConfig);

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
