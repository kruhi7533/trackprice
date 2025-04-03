import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import PriceHistory from './pages/PriceHistory';
import ImageSearch from './pages/ImageSearch';
import Alerts from './pages/Alerts';

function App() {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // ✅ Using Dummy Data (Since No Backend)
                const data = [
                    { id: 1, name: "Product A", price: 100 },
                    { id: 2, name: "Product B", price: 200 }
                ];
                console.log("Fetched products:", data);
                setAllProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <Router>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            <AppContent allProducts={allProducts} />
        </Router>
    );
}

function AppContent({ allProducts }) {
    const location = useLocation();
    const path = location.pathname.toLowerCase();
    
    // ✅ Show Navbar everywhere except `/login` and `/signup`
    const hideNavbar = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup';


    return (
        <div>
            {!hideNavbar && <Navbar />}

            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/productlist" element={<ProductList />} />
                    <Route path="/productlist/:id" element={<ProductDetail products={allProducts} />} />
                    <Route path="/pricehistory/:id" element={<PriceHistory />} />
                    <Route path="/imagesearch" element={<ImageSearch />} />
                    <Route path="/alerts" element={<Alerts />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
