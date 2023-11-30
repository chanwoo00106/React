import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/login/login'

const router = createBrowserRouter([
  {
    children: [{ path: '/login', element: <Login /> }],
  },
])

const Presentation = () => {
  return <RouterProvider router={router} />
}

export default Presentation
