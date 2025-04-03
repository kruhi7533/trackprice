import React from 'react';
import { Link } from 'react-router-dom';
import { Bell } from "lucide-react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ProductCard.css'; // Ensure CSS file is imported

const ProductCard = ({ product }) => {
    const handleSetAlert = () => {
        let alerts = JSON.parse(localStorage.getItem("alerts")) || [];
        const newAlert = {
            id: product.id,
            name: product.name,
            price: product.currentPrice,
            time: new Date().toLocaleString(),
        };

        const exists = alerts.some(alert => alert.id === product.id);
        if (!exists) {
            alerts.push(newAlert);
            localStorage.setItem("alerts", JSON.stringify(alerts));

            // ✅ Show success toast
            toast.success("Price alert set!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            // ✅ Show error toast if alert already exists
            toast.error("Alert already set for this product!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="flex items-center bg-white shadow-md rounded-lg p-4 mt-6 product-card">
            <img src={product.image} alt={product.name} className="w-32 h-32 object-contain rounded-md mr-4" />
            <div className="flex-grow">
                <Link to={`/ProductList/${product.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                    {product.name}
                </Link>
                <p className="text-gray-600">
                    <span className="text-black font-bold">{product.currentPrice}</span>{' '}
                    <span className="line-through text-gray-500">{product.originalPrice}</span>{' '}
                    <span className="text-green-600 font-bold">{product.discount}</span>
                </p>

                <div className="flex items-center mt-3 space-x-4">
                    {/* ✅ Price Alert Button with Toast */}
                    <button 
                        className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition flex items-center space-x-2"
                        onClick={handleSetAlert}
                    >
                        <Bell size={20} />
                        <span className="text-sm">Set Alert</span>
                    </button>

                    {/* ✅ View Price History Button */}
                    <Link
                        to={`/pricehistory/${product.id}`}  
                        className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition"
                    >
                        View Price History
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
