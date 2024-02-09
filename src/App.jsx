import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './app.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Staff from './components/Staff';
import Contact from './components/Contact';

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
