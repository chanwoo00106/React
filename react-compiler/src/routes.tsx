import { createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/hello',
    element: <div>hello world</div>,
  },
])

export default routes
