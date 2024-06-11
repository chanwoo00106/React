import { createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/hello',
    element: <div>hello world</div>,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
])

export default routes
