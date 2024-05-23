import i18next from 'i18next';

import en from './navigation-i18n/en';
import authRoles from '../main/apps/accounts/auth/authRoles';

i18next.addResourceBundle('en', 'navigation', en);

const navigationConfig = [
  {
    id: 'home',
    title: 'Home',
    type: 'item',
    auth: authRoles.onlyGuest,
    icon: 'heroicons-outline:home',
    translate: 'Home',
    url: '/apps/home'
  },
  {
    id: 'features',
    title: 'Features',
    type: 'item',
    auth: authRoles.onlyGuest,
    translate: 'Features',
    url: '/apps/features'
  },
  {
    id: 'how_it_works',
    title: 'How it works',
    type: 'item',
    auth: authRoles.onlyGuest,
    translate: 'How it works',
    url: '/apps/how-it-works'
  },
  {
    id: 'signin',
    title: 'Sign in',
    type: 'item',
    auth: authRoles.onlyGuest,
    icon: 'material-outline:login',
    translate: 'Sign in',
    url: 'https://feature.d3u7ml2c0tfxhv.amplifyapp.com/'
  },
  {
    id: 'signup',
    title: 'Get started',
    type: 'item',
    auth: authRoles.onlyGuest,
    translate: 'Get started',
    url: 'https://feature.d3uu4km723ivc2.amplifyapp.com/'
  },
];

export default navigationConfig;
