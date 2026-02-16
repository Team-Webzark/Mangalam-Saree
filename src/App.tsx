import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Heritage from './components/Heritage';
import Portfolio from './components/Portfolio';
import Archive from './components/Archive';
import Showroom from './components/Showroom';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="min-h-screen bg-[#FCF9F6]">
      <Navigation />
      <Hero />
      <Heritage />
      <Portfolio />
      <Archive />
      <AboutUs/>
      <Showroom />
      <Footer />
    </div>
  );
}

export default App;
