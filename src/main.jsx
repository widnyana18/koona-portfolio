/**
 * @copyright 2025 komangwidnyana
 * @license Apache-2.0
 */

// React modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Components
import App from './App.jsx'

// Style |  CSS Link
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
