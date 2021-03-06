import { RouteProps } from 'react-router-dom';
import ERoutes from '../__types__/ERoutes';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Gallery from '../pages/Gallery';
import SendingOrder from '../pages/SendingOrder';
import NotFound from '../pages/404';

export const Routes: RouteProps[] = [
  {
    path: ERoutes.HOME,
    exact: true,
    component: Home,
  },
  {
    path: ERoutes.PRODUCTS,
    exact: true,
    component: Products,
  },
  {
    path: ERoutes.GALLERY,
    exact: true,
    component: Gallery,
  },
  {
    path: ERoutes.SEND_ORDER,
    exact: true,
    component: SendingOrder,
  },
  {
    exact: false,
    component: NotFound,
  }
];