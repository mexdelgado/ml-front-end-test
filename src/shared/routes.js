// Components
import Home from '../app/home/components/Home';

// Containers = se conecta con redux
import Items from '../app/items';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/items',
    component: Items,
    exact: true
  },
  {
    path: '/items/:id',
    component: Items,
    exact: true
  }
];

export default routes;
