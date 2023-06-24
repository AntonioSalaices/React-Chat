import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import Spinner from '@Components/basics/Spinner';
import { PURPLE } from '@Utils/colors';
import router from './router';

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Spinner singleColor={PURPLE} />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRoutes;
