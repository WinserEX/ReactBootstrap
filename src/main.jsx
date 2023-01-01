import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './Components/navBarComp/NavBarComp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBarComp />
    <App />
  </React.StrictMode>,
)
