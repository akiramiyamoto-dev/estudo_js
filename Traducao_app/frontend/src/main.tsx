import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.tsx'
import NavBar from './components/NavBar.tsx';
import Footer from './components/Footer.tsx';
import { AuthProvider } from "./context/AuthProvider.tsx";
import HeroSection from './components/HeroSection.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <NavBar />
      <HeroSection />
      <App />
      <Footer />
    </AuthProvider>
  </StrictMode>
);
