import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ModalControllerProvider } from 'modal-controller'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModalControllerProvider>
      <App />
    </ModalControllerProvider>
  </React.StrictMode>,
)
