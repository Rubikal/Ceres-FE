import ActiveOrder from '../components/orders/ActiveOrder';
import CreateOrder from '../components/orders/CreateOrder';
import Login from '../components/users/Login';

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
    title: 'Login',
    path: '/login',
    component: Login
  }
];

export default routes;