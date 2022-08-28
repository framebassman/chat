import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sentry_dns, env } from './environment';
import { YandexMetrica } from './YandexMetrica';
import * as Sentry from '@sentry/browser';
import './index.css';

Sentry.init({
  dsn: sentry_dns,
  maxBreadcrumbs: 50,
  environment: env(),
  debug: env() === 'PRODUCTION' ? false : true,
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <YandexMetrica accounts={[52190806]} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
