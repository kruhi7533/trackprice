import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { id } = useParams(); // Get product ID from URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-details-image" />
      <h2>{product.name}</h2>
      <p><b>Price:</b> ₹{product.price}</p>
      <p><b>Description:</b> {product.description}</p>
      <p><b>Lowest Price:</b> ₹{product.lowestPrice} | <b>Highest Price:</b> ₹{product.highestPrice}</p>
      <button className="buy-now">Buy Now</button>
    </div>
  );
};

export default ProductDetails;
