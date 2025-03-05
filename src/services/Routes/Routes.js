import { Route, Routes } from 'react-router-dom';
import About from 'pages/About/About';
import Help from 'pages/Help/Help';
import Pricing from 'pages/Pricing/Pricing';
import Home from 'pages/Home/Home';
import Features from 'pages/Features/Features';
import NotFound from 'pages/NotFound/NotFound';
import { useEffect } from 'react';

export default function NavigationRoutes() {
  useEffect(() => {
    if(window.location.href === 'http://localhost:3000/features'){
      document.body.style.backgroundColor = '#052825'
    }
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
}
