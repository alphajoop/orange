import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Feature } from './components/Feature';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Services } from './components/Services';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 300,
      easing: 'ease-in',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-orange-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Feature />
      <Services />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
