import { lazy } from 'react';

const HowItWorks = lazy(() => import('./How_it_WorksPage'));

const HowItWorksPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/how-it-works',
      element: <HowItWorks />,
    },
  ],
};

export default HowItWorksPageConfig;
