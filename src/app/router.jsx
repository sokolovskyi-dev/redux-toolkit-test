import LoginPage from '../routes/public/login';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    // lazy: () => import('../routes/public/login'),
  },
]);
