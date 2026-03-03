import LoginPage from '@/routes/public/login/Login';
import { createBrowserRouter } from 'react-router-dom';

import { loginAction } from '@/routes/public/login/login.action';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
    action: loginAction,
    // lazy: () => import('../routes/public/login'),
  },
  {
    path: '/',
    lazy: () => import('../routes/protected/Layout'),
    children: [
      { path: 'dashboard', lazy: () => import('../routes/protected/dashboard') },
      { path: 'todo', lazy: () => import('../routes/protected/todo') },
    ],
  },
]);
