import nProgress from 'nprogress';
import Router from 'next/router';

import Page from '../components/Page';

import '../components/styles/nprogress.css';

// NextJS Router gives us some events to know how much % of the page is loaded
Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

export default function MyAppWrapper({ Component, pageprops }) {
  return (
    <Page>
      <p>this is _app</p>
      <Component {...pageprops} />
    </Page>
  );
}
