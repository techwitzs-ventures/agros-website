import { lazy } from 'react';

const FeaturesPage = lazy(() => import('./FeaturesPage'));

const FeaturesPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/features',
      element: <FeaturesPage />,
    },
  ],
};

export default FeaturesPageConfig;
