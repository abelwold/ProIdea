import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import LanguageSwitcher from './components/LanguageSwitcher';
import Portfolio from './pages/Projects';

{/*import Projects from './pages/Projects';*/}
{/*import About from './pages/About';
import Contact from './pages/Contact';*/}
import Navbar from './components/Navbar';
{/*import Footer from './components/Footer';*/}
import Footer from './components/Footer';

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
           {/* <Route path="/projects" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />*/}
          </Routes>
        </main>
       {/* <Footer />*/}
        <DarkModeToggle />
        <Footer />
      </div>
    </Router>
  );
}