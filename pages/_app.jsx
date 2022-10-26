import "../styles/globals.scss";
import "../styles/intro.scss";
import "../styles/navbar.scss";
import "../styles/actions.scss";
import "../styles/completed.scss";
import "../styles/tabs.scss";

import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
