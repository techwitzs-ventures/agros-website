import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { authRoles } from '../accounts/auth';


const Items = lazy(() => import('./items/items'));
const Item = lazy(() => import('./item/Item'));
const ItemsCategory = lazy(() => import('./itemsCategory/itemsCategory'));
const ItemsCategories = lazy(() => import('./itemsCategories/itemsCategories'));
const WishlistItems = lazy(() => import('./wishlistItems/wishlistItems'));
const WishlistItem = lazy(() => import('./wishlistItem/wishlistItem'));

const ECommerceAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/inventory/items',
      element: <Items />,
      auth: authRoles.plateformadmin
    },
    {
      path: 'apps/inventory/itemscategory',
      element: <ItemsCategories />,
      auth: authRoles.plateformadmin
    },
    {
      path: 'apps/inventory/itemswishlist',
      element: <WishlistItems />,
      auth: authRoles.buyer
    },
    {
      path: 'apps/inventory/items/:itemId/*',
      element: <Item />,
      auth: authRoles.plateformadmin
    },
    {
      path: "apps/inventory/itemscategory/:itemscategoryId/*",
      element: <ItemsCategory />,
      auth: authRoles.plateformadmin
    },
    {
      path: 'apps/inventory/itemswishlist/:param1/:param2',
      element: <WishlistItem />,
      auth: authRoles.buyer
    },
    {
      path: 'apps/inventory',
      element: <Navigate to="items" />
    },

  ],
};

export default ECommerceAppConfig;
