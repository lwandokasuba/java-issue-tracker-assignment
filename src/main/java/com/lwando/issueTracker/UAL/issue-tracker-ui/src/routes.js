import {
  About,
  EquipmentDetails,
  Equipments,
  Home,
  Issues,
  IssuesDetails,
} from './pages';

const routes = [
  {
    id: 0,
    title: 'About',
    component: About,
    href: '/about',
  },
  {
    id: 1,
    title: 'Home',
    component: Home,
    href: '/',
  },
  {
    id: 2,
    title: 'Issues',
    component: Issues,
    href: '/issues',
  },
  {
    id: 3,
    title: 'Equipments',
    component: Equipments,
    href: '/equipments',
  },
  {
    id: 4,
    title: 'Equipment Details',
    component: EquipmentDetails,
    href: '/equipment/:equipmentId',
  },
  {
    id: 5,
    title: 'Issues Details',
    component: IssuesDetails,
    href: 'issue/:issueId',
  },
];

export default routes;
