import { createBrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '../pages/error/ErrorBoundary';
import { Home } from '../pages/home/Home';

export const router = createBrowserRouter([
    {
      element: <Home />,
      path: "/",
      errorElement:<ErrorBoundary />,
    }
  ]);
