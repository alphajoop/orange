import { Feature } from './components/Feature';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Services } from './components/Services';

function App() {
  return (
    <div className="bg-orange-100">
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
