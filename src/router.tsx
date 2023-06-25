import { createBrowserRouter } from 'react-router-dom';
import Layout from '@Components/composed/Layout/Layout';
import Home from 'screens/home/home';
import NotFound from '@Components/composed/NotFound/NotFound';

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
          const { Library } = await import('./screens/library/library');

          return {
            Component: Library,
          };
        },
      },
      {
        path: 'chat',
        async lazy() {
          const { Chat } = await import('./screens/chat/chat');

          return {
            Component: Chat,
          };
        },
      },
      {
        path: '*',
        element: <NotFound tx="notFound404.message" />,
      },
    ],
  },
]);

export default router;
