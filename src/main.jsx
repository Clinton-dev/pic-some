import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import { CartContext } from './context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContext>
    <Router>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </Router>
  </CartContext>
  ,
)
