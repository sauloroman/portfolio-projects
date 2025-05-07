import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PortfolioApp } from './PortfolioApp'
import './styles/app.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PortfolioApp />
  </StrictMode>
)
