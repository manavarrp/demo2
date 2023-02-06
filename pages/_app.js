import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import store from '../store/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
