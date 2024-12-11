import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
  'a',
  {
    href : "https//:www.google.co.in",
    target : '_blank'
  },
  'Google'
)

createRoot(document.getElementById('root')).render(
  <>
    <App />
    {reactElement}

  </>
)
