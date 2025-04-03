import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import PriceHistory from './pages/PriceHistory';
import ImageSearch from './pages/ImageSearch';
import Alerts from './pages/Alerts';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/price-history" element={<PriceHistory />} />
        <Route path="/image-search" element={<ImageSearch />} />
        <Route path="/alerts" element={isAuthenticated ? <Alerts /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
