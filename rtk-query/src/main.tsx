import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import rootReducer from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={rootReducer}>
    <App />
  </Provider>
)
