import { RouterProvider } from 'react-router-dom';
import router from './router';

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
