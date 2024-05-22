import i18next from 'i18next';

import en from './navigation-i18n/en';
import authRoles from '../main/apps/accounts/auth/authRoles';

i18next.addResourceBundle('en', 'navigation', en);

const navigationConfig = [
  {
    id: 'aboutus',
    title: 'About us',
    type: 'item',
    auth: authRoles.onlyGuest,
    icon: 'heroicons-outline:users',
    translate: 'About us',
    url: '/apps/about-us'
  },
  {
    id: 'contactus',
    title: 'Contact us',
    type: 'item',
    auth: authRoles.onlyGuest,
    icon: 'material-outline:perm_phone_msg',
    translate: 'Contact us',
    url: '/apps/contact-us'
  },
  {
    id: 'signin',
    title: 'Sign in',
    type: 'item',
    auth: authRoles.onlyGuest,
    icon: 'material-outline:login',
    translate: 'Sign in',
    url: 'https://develop.d3u7ml2c0tfxhv.amplifyapp.com/'
  },
  {
    id: 'signup',
    title: 'Get started',
    type: 'item',
    auth: authRoles.onlyGuest,
    icon: 'heroicons-outline:home',
    translate: 'Get started',
    url: 'https://develop.d3uu4km723ivc2.amplifyapp.com/'
  },
];

export default navigationConfig;
