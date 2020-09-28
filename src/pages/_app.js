import { Provider } from 'react-redux';
import createStore from '../store/reducers';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const store = createStore();
  return  <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
}

export default MyApp
