import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Spinner from '@Components/basics/Spinner';
import { PURPLE } from '@Utils/colors';

const HomePage = lazy(() => import('./screens/home/home'));
const Layout = lazy(() => import('./components/composed/Layout/Layout'));
const NotFound = lazy(() => import('./components/composed/NotFound/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFound tx="notFound404.message" />,
  },
]);

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Spinner singleColor={PURPLE} />}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Suspense>
  );
};

export default AppRoutes;
