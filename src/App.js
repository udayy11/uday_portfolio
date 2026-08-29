import React from 'react';
import { Toaster } from 'react-hot-toast';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Main App Component
 * Orchestrates all portfolio sections with smooth scrolling and animations
 */
function App() {
  return (
    <div className="bg-zinc-950 text-zinc-200 antialiased">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(24, 24, 27, 0.95)',
            color: '#e4e4e7',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '0.5rem',
            backdropFilter: 'blur(12px)',
            fontSize: '0.875rem',
          },
          success: {
            style: {
              borderColor: 'rgba(16, 185, 129, 0.3)',
            },
            iconTheme: {
              primary: '#10b981',
              secondary: '#09090b',
            },
          },
          error: {
            style: {
              borderColor: 'rgba(239, 68, 68, 0.3)',
            },
            iconTheme: {
              primary: '#ef4444',
              secondary: '#09090b',
            },
          },
        }}
      />
    </div>
  );
}

export default App;
