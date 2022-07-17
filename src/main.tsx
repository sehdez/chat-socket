import React from 'react'
import ReactDOM from 'react-dom/client'
import MainRouter from './socket-chat/MainRouter/MainRouter';
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
)
