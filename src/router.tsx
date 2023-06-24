import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('./screens/home/home'));
const Layout = lazy(() => import('./components/composed/Layout/Layout'));
const NotFound = lazy(() => import('./components/composed/NotFound/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '*', element: <NotFound tx="notFound404.message" /> },
    ],
  },
]);

export default router;
