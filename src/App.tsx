import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import OSWindow from './components/OSWindow';
import ShardCanvas from './components/ShardCanvas';
import CustomCursor from './components/CustomCursor';

// Lazy load pages for code splitting
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Studio = React.lazy(() => import('./pages/Studio'));
const Work = React.lazy(() => import('./pages/Work'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<OSWindow><Home /></OSWindow>} />
          <Route path="/services" element={<OSWindow><Services /></OSWindow>} />
          <Route path="/studio" element={<OSWindow><Studio /></OSWindow>} />
          <Route path="/work" element={<OSWindow><Work /></OSWindow>} />
          <Route path="/contact" element={<OSWindow><Contact /></OSWindow>} />
          <Route path="/privacy" element={<OSWindow><Privacy /></OSWindow>} />
          <Route path="/terms" element={<OSWindow><Terms /></OSWindow>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  const location = useLocation();
  
  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#050508' }}>
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      
      {/* Global Background Canvas */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <ShardCanvas route={location.pathname} />
      </div>
      
      <div style={{ flex: 1, position: 'relative', zIndex: 10 }}>
        <AnimatedRoutes />
      </div>
      {location.pathname !== '/work' && <Footer />}
    </div>
  );
}

export default App;
