import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { registerSW } from "virtual:pwa-register";

registerSW({
    immediate: true,
});
createRoot(document.getElementById('root')!).render(
    <Suspense>
      <App />
    </Suspense>,
)
