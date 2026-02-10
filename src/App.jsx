import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Concerts from './sections/Concerts';
import Gallery from './sections/Gallery';
import About from './sections/About';
import Booking from './sections/Booking';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-black flex items-center justify-center">
        <div className="text-neon-blue font-display text-4xl animate-pulse tracking-widest">
          NOVA LOADING...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark-bg min-h-screen text-white selection:bg-neon-purple selection:text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Concerts />
        <Gallery />
        <About />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
