import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import NotFound from './pages/Page404';
import Products from './pages/Products';
import Slides from './pages/Slides';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: 'menu',
      element: <DashboardLayout />,
      children: [
        { path: '/menu/products', element: <Products /> },
        { path: '/menu/blog', element: <Blog /> },
      ],
    },
    {
      path: 'slides',
      element: <Slides />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/menu/products" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
