// Components
import Home from '../app/home/components/Home';
import About from '../app/about/components/About';

// Containers = se conecta con redux
import Blog from '../app/blog';
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
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/blog',
    component: Blog
  }
];

export default routes;
