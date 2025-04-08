import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import TaskPage from '../../pages/TaskPage/TaskPage';
import RouterErrorFallback from './RouterErrorFallback';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/work',
        element: (
            <TaskPage />
        ),
        errorElement: <RouterErrorFallback />,
      },
      {
        path: '*',
        element: <h1>404</h1>,
      },
    ],
  },
]);
