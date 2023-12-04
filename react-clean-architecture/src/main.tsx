import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import { DIProvider } from './libs/DIContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DIProvider>
      <App />
    </DIProvider>
  </React.StrictMode>,
)
