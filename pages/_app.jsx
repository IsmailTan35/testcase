import "../styles/globals.scss";
import "../styles/intro.scss";
import "../styles/navbar.scss";
import "../styles/actions.scss";
import "../styles/completed.scss";
import "../styles/tabs.scss";
import "../styles/poppup.scss";

import Layout from "../components/layout";
import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
