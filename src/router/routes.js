import { connect } from 'react-redux';
import ActiveOrder from '../components/orders/ActiveOrder';
import ViewOrder from '../components/orders/ViewOrder';
import CreateOrder from '../components/orders/CreateOrder';
import SubmitItems from '../components/orders/SubmitItems';
import Login from '../components/users/Login';
import OauthProgress from '../components/users/OauthProgress';
import { getLocalStorage } from '../helpers/cache';
import NotFound from '../components/grid/NotFound';
import ViewWallet from '../components/users/ViewWallet';
import OldOrders from '../components/orders/OldOrders';

const user = JSON.parse(getLocalStorage('user'));
const auth = !!user ? !!user.jwt : false;

const routes = [
  {
    title: 'Your active order',
    path: '/',
    exact: true,
    component: auth ? ActiveOrder : Login
  },
  {
    title: 'Old Orders',
    path: '/old-orders',
    exact: true,
    component: auth ? OldOrders : Login
  },
  {
    title: 'Create new order',
    path: '/new-order',
    component: auth ? CreateOrder : Login
  },
  {
    title: 'Submit Items',
    path: '/orders/:orderId/submit-items',
    component: auth ? SubmitItems : Login
  },
  {
    title: 'View Order',
    path: '/orders/:orderId',
    component: auth ? ViewOrder : Login
  },
  {
    title: 'Login in progress',
    path: '/login/callback/',
    component: OauthProgress
  },
  {
    title: 'Login',
    path: '/login',
    component: auth ? NotFound : Login
  },
  {
    title: 'View Wallet',
    path: '/view-wallet',
    component: auth ? ViewWallet : Login
  },
  {
    title: '404',
    component: auth ? NotFound : Login
  },
];

export default routes;
