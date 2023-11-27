import './App.css';
import Hero from "./components/Hero"
import Contact from "./components/Contact"
import Who from "./components/Who"
import Works from "./components/Works"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container max-w-full">
      {loading ? <Spinner /> : (
        <>
          <Navbar />
          <Hero />
          <Who />
          <Works />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
