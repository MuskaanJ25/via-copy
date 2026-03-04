import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Blog from './components/Blog';

function App() {
  return (
    <div className="pageBg">
      <div className="container-xl position-relative" style={{ maxWidth: '1200px' }}>
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* Feature Blurbs */}
        <Features />

        {/* Blog Section */}
        <Blog />

        {/* Bottom spacing */}
        <div style={{ height: '80px' }}></div>
      </div>
    </div>
  );
}

export default App;