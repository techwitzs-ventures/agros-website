import ECommerceAppConfig from './inventory/ECommerceAppConfig';
import invoiceConfig from './invoice/invoiceConfig';
import orderConfig from './order/orderConfig';
import ProfileAppConfig from './profile/profileAppConfig';

const appsConfigs = [
  ProfileAppConfig,
  ECommerceAppConfig,
  orderConfig,
  invoiceConfig
];

export default appsConfigs;
