import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@Components/composed/Layout/Layout';

const HomePage = lazy(() => import('./screens/home/home'));
const NotFound = lazy(() => import('./components/composed/NotFound/NotFound'));
const Library = lazy(() => import('./screens/library/library'));
const Chat = lazy(() => import('./screens/chat/chat'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'library', element: <Library /> },
      { path: 'chat', element: <Chat /> },
      { path: '*', element: <NotFound tx="notFound404.message" /> },
    ],
  },
]);

export default router;
