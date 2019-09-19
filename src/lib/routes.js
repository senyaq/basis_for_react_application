import Home from '../pages'
import About from '../pages/about'

const routes = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    title: 'About',
    path: '/about',
    component: About,
  },
]

export default routes
