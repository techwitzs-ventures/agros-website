import i18next from 'i18next';

import en from './navigation-i18n/en';
import authRoles from '../main/apps/accounts/auth/authRoles';
import config from 'src/appConfig';

i18next.addResourceBundle('en', 'navigation', en);

const navigationConfig = [
  {
    id: 'home',
    title: 'Home',
    type: 'item',
    auth: authRoles.onlyGuest,
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
    translate: 'Sign in',
    url: config.signin_url
  },
  {
    id: 'signup',
    title: 'Get started',
    type: 'item',
    auth: authRoles.onlyGuest,
    translate: 'Get started',
    url: config.signup_url
  },
];

export default navigationConfig;
