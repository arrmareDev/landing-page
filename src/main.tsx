import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/fonts.css'
import './styles/variables.css'
import './styles/base.css'
import './styles/app.css'

import App from './App'

// Los elementos [data-reveal] solo se ocultan si hay JavaScript
document.documentElement.classList.add('js')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
