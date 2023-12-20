import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { DIProvider } from './libs/DIContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DIProvider>
        <App />
      </DIProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
