import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Chat from './pages/chat';
import BasicLayout from './layouts/BasicLayout';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <BasicLayout />, // 移除 AuthGuard，直接显示布局
    children: [
      {
        path: '',
        element: <Chat />,
      },
    ],
  },
]);
