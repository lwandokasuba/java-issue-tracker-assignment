import {
  Login,
} from './components';
import SignUp from './components/SignUp';

const routes = [
  {
    id: 0,
    title: 'Login',
    component: Login,
    href: '/login',
    index: true,
  },
  {
    id: 1,
    title: 'Sign Up',
    component: SignUp,
    href: '/signup',
    index: true,
  },
];

export default routes;
