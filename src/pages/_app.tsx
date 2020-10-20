import { Provider } from 'react-redux';
import createStore from '../store/reducers';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import '../styles/globals.css'

Sentry.init({
  dsn: "https://c04938ccebd44cb38fed064637edefd3@o464410.ingest.sentry.io/5473022",
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

function MyApp({ Component, pageProps }) {
  const store = createStore();
  return  <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
}

export default MyApp;