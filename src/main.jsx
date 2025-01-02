import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
    <App />
  
)
console.warn = function (message) {
  if (!message.includes('W0019')) {
    console.log(message);
  }
};
