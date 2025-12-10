import React, { Suspense, lazy } from 'react';
import Hero from './sections/Hero';
import Introduction from './sections/Introduction';

// Lazy load heavy sections
const SelectedWorks = lazy(() => import('./sections/SelectedWorks'));
const Process = lazy(() => import('./sections/Process'));
const Footer = lazy(() => import('./sections/Footer'));

function App() {
  return (
    <div className="app">
      <Hero />
      <Introduction />

      <Suspense fallback={<div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Gallery...</div>}>
        <SelectedWorks />
      </Suspense>

      <Suspense fallback={<div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Process...</div>}>
        <Process />
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
