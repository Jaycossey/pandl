import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';
import Navbar from './components/navbar-components/Navbar';
import Home from './components/home-components/Home';
import Reviews from './components/review-components/Reviews';
import Staff from './components/staff-components/Staff';
import Contact from './components/contact-components/Contact';

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
