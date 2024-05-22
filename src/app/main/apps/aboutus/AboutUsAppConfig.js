import { lazy } from 'react';

const AboutUsApp = lazy(() => import('./AboutUsApp'));

const AboutUsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/about-us',
      element: <AboutUsApp />,
    },
  ],
};

export default AboutUsAppConfig;
