import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Services from './pages/Services';
import Studio from './pages/Studio';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import OSWindow from './components/OSWindow';
import ShardCanvas from './components/ShardCanvas';
import CustomCursor from './components/CustomCursor';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<OSWindow><Home /></OSWindow>} />
        <Route path="/services" element={<OSWindow><Services /></OSWindow>} />
        <Route path="/studio" element={<OSWindow><Studio /></OSWindow>} />
        <Route path="/insights" element={<OSWindow><Insights /></OSWindow>} />
        <Route path="/contact" element={<OSWindow><Contact /></OSWindow>} />
        <Route path="/privacy" element={<OSWindow><Privacy /></OSWindow>} />
        <Route path="/terms" element={<OSWindow><Terms /></OSWindow>} />
      </Routes>
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
      <Footer />
    </div>
  );
}

export default App;
