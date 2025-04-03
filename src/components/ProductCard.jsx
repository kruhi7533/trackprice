import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
            <div className="product-card">

            <img src={product.image} alt={product.name} className="product-image" />
            <div className="p-4 product-info">
                <h2 className="product-name">{product.name}</h2>

                <p className="price">{product.currentPrice}</p>

                <p className="original-price">{product.originalPrice}</p>

                <p className="discount">{product.discount}</p>

                <p className="price-drop-info">{product.priceDropInfo}</p>
                <Link
                    to={`/product/${product.id}`}
                    className="view-details-btn"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
