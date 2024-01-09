import LoginFactory from '@/factories/pages/LoginFactory'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Router = () => {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: '/login',
          element: <LoginFactory />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default Router
