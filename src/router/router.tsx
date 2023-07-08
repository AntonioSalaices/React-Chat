import { createBrowserRouter } from 'react-router-dom';
import { NotFound } from '@Components/Core';
import Home from 'screens/home/home';
import PrivateRoute from './PrivateRoute';
import { RoutesConstants } from '@Constans/routesConstants';
import PublicRoute from './PublicRoute';

const router = createBrowserRouter([
  {
    path: RoutesConstants.LandingPage,
    element: <PublicRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: RoutesConstants.Library,
        async lazy() {
          const { Library } = await import('../screens/library/library');

          return {
            Component: Library,
          };
        },
      },
      {
        path: RoutesConstants.NotFound,
        element: <NotFound tx="notFound404.message" />,
      },
    ],
  },
  {
    path: RoutesConstants.Dashboard,
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        async lazy() {
          const { Dashboard } = await import('../screens/dashboard/dashboard');

          return {
            Component: Dashboard,
          };
        },
      },
      {
        path: RoutesConstants.Chat,
        async lazy() {
          const { Chat } = await import('../screens/chat/chat');

          return {
            Component: Chat,
          };
        },
      },
    ],
  },
]);

export default router;
