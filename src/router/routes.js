import ActiveOrder from '../components/orders/ActiveOrder';
import CreateOrder from '../components/orders/CreateOrder';
import Login from '../components/users/Login';
import OauthProgress from '../components/users/OauthProgress';

const routes = [
  {
    title: 'Your active order',
    path: '/',
    exact: true,
    component: ActiveOrder
  },
  {
    title: 'Create new order',
    path: '/create-order',
    component: CreateOrder
  },
  {
    title: 'Login in progress',
    path: '/login/callback/',
    component: OauthProgress
  },
  {
    title: 'Login',
    path: '/login',
    component: Login
  },
];

export default routes;