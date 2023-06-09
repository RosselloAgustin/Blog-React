import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/general.css'
import './styles/home.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
)
