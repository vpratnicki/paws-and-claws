import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Nav from './components/Nav';
import Services from './components/Services';
import About from './components/About';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => {
    document.title = page;
    setCurrentPage(page);
  };

  return (
    <ApolloProvider client={client}>
    <div>
      <Router>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/make-an-appointment" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
