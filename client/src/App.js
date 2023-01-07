import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from './components/Nav';
import Services from './components/Services';
import About from './components/About';
import Login from './components/Login';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => {
    document.title = page;
    setCurrentPage(page);
  };

  return (
    <div>
      <Router>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/make-an-appointment" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
