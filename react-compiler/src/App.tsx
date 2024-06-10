import { RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'
import routes from './routes'

function App() {
  return (
    <Suspense fallback='loading'>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
