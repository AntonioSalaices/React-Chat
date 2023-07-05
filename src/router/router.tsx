import { createBrowserRouter } from 'react-router-dom';
import { Layout, NotFound } from '@Components/Core';
import Home from 'screens/home/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'library',
        async lazy() {
          const { Library } = await import('../screens/library/library');

          return {
            Component: Library,
          };
        },
      },
      {
        path: 'dashboard',
        async lazy() {
          const { DashboardLayout } = await import('../screens/dashboard/dashboardLayout');

          return {
            Component: DashboardLayout,
          };
        },
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
            path: 'chat',
            async lazy() {
              const { Chat } = await import('../screens/chat/chat');

              return {
                Component: Chat,
              };
            },
          },
        ],
      },
      {
        path: '*',
        element: <NotFound tx="notFound404.message" />,
      },
    ],
  },
]);

export default router;
