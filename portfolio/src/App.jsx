import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import RetailSales from './pages/project-details/RetailSales';
import RegionalProfit from './pages/project-details/RegionalProfit';
import HealthData from './pages/project-details/HealthData';
import './styles/_globals.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/retail" element={<RetailSales />} />
        <Route path="/projects/profit" element={<RegionalProfit />} />
        <Route path="/projects/health" element={<HealthData />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
