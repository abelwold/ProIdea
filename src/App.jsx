import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import LanguageSwitcher from './components/LanguageSwitcher';
import PricingSection from './components/PricingSection'; // pricing component

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/pricing" element={<PricingSection />} />
          </Routes>
        </main>

        <DarkModeToggle />
        <Footer />
      </div>
    </Router>
  );
}
