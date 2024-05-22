import { lazy } from 'react';

const ContactUsApp = lazy(() => import('./ContactUsApp'));

const ConatctUsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/contact-us',
      element: <ContactUsApp />,
    },
  ],
};

export default ConatctUsAppConfig;
