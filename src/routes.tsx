import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Chat from './pages/chat';
import BasicLayout from './layouts/BasicLayout';

export const router = createBrowserRouter([
  {
  path: '/',
  element: <BasicLayout />, // 直接显示布局，无登录拦截
  children: [{ path: '', element: <Chat /> }],
}
    ],
  },
]); 
