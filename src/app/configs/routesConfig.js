import FuseUtils from '@fuse/utils';
import FuseLoading from '@fuse/core/FuseLoading';
import { Navigate } from 'react-router-dom';
import settingsConfig from 'app/configs/settingsConfig';
import appsConfigs from '../main/apps/appsConfig';
import SignInConfig from '../main/apps/accounts/sign-in/SignInConfig';
import SignUpConfig from '../main/apps/accounts/sign-up/SignUpConfig';
import OtpPageConfig from '../main/apps/accounts/otp/otpConfig';
import SignOutConfig from '../main/apps/accounts/sign-out/SignOutConfig';
import dashboardsConfigs from '../main/dashboards/dashboardsConfigs';

const routeConfigs = [
  ...appsConfigs,
  ...dashboardsConfigs,
  SignOutConfig,
  SignInConfig,
  SignUpConfig,
  OtpPageConfig,
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
  {
    path: '/',
    element: <Navigate to="/apps/home" />
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '*',
    element: <Navigate to="pages/error/404" />,
  },
];

export default routes;
