import { connect } from 'react-redux';
import ActiveOrder from '../components/orders/ActiveOrder';
import CreateOrder from '../components/orders/CreateOrder';
import Login from '../components/users/Login';
import OauthProgress from '../components/users/OauthProgress';
import { getLocalStorage } from '../helpers/cache';
import NotFound from '../components/grid/NotFound';

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
    title: 'Create new order',
    path: '/create-order',
    component: auth ? CreateOrder : Login
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
    title: '404',
    component: auth ? NotFound : Login
  },
];

export default routes;
