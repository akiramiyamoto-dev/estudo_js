import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
// Importar o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importar o JS do Bootstrap (com Popper.js incluído)
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css'
import App from './App.tsx'
import NavBar from './components/NavBar.tsx';
import Footer from './components/Footer.tsx';
import { AuthProvider } from "./context/AuthProvider.tsx";
import HeroSection from './components/HeroSection.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <HeroSection />
        <App />
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
