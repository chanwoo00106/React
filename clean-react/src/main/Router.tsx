import Login from '@/presentation/pages/login/login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Router = () => {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default Router
