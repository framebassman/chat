import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from './App';
import { YandexMetrica } from './YandexMetrica';
import * as serviceWorker from './serviceWorker';
import { sentry_dns, env } from './environment';
import './index.css';

Sentry.init({
  dsn: sentry_dns,
  maxBreadcrumbs: 50,
  environment: env(),
  debug: env() === 'PRODUCTION' ? true : false,
  release: process.env.SENTRY_RELEASE,
  beforeBreadcrumb(breadcrumb: any, hint: any) {
    if (breadcrumb.category === 'ui.click') {
      const { target } = hint.event;
      if (target.ariaLabel) {
        breadcrumb.message = target.ariaLabel;
      }
    }
    return breadcrumb;
  },
});

ReactDOM.render(
  <div>
    <App />
    <YandexMetrica accounts={[52190806]} />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
