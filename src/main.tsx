import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './views/App';

import './views/styles/reset.scss'
import './views/styles/style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
