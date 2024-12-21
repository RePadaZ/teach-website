import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { Header } from './Header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Header />
      <App />
  </StrictMode>,
)
