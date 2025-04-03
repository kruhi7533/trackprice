import './ProductList.css';
import { Link } from 'react-router-dom'; 
import Filters from './Filters';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    // ✅ Provide a default array if products is undefined
    const defaultProducts = [
        {
            id: 1,
            name: 'Home Lane Electric Juicer 450 Watt 1 Jar Juicer Mixer Grinder',
            image: 'https://th.bing.com/th/id/OIP.taW7eajsLZiqCOykIFsj6gAAAA?rs=1&pid=ImgDetMain',
            currentPrice: '₹2,131',
            originalPrice: '₹4,999',
            discount: '57% Off',
            lowestPrice: '₹2,131',
            highestPrice: '₹2,250',
            priceDropInfo: 'Price dropped 5% (₹119 reduction) in Snapdeal this week',
        },
        {
            id: 2,
            name: 'ECOVACS DEEBOT N10 Robotic Floor Cleaner (WiFi, Google Assistant, Alexa)',
            image: 'https://i5.walmartimages.com/asr/27d099b3-aff6-41af-97d6-ce6a80ad0982_1.a3b9c134c1d8004084661286fece8371.jpeg',
            currentPrice: '₹15,990',
            originalPrice: '₹49,900',
            discount: '87% Off',
            lowestPrice: '₹15,990',
            highestPrice: '₹27,900',
            priceDropInfo: 'Price dropped 36% (₹9,009 reduction) in Flipkart this week',
        },
        {
            id: 3,
            name: 'Canon EOS 1500D DSLR Camera (18-55mm Lens)',
            image: 'https://th.bing.com/th/id/OIP.Xgu2w7528qHso0_FyCRsfgHaHa?rs=1&pid=ImgDetMain',
            currentPrice: '₹38,999',
            originalPrice: '₹45,999',
            discount: '15% Off',
            lowestPrice: '₹38,999',
            highestPrice: '₹45,999',
            priceDropInfo: 'Price dropped 12% (₹5,500 reduction) in Amazon this week',
        },
        {
            id: 4,
            name: 'Nike Air Zoom Pegasus 39 Running Shoes',
            image: 'https://th.bing.com/th/id/OIP.svXOh0UmZn8PK5O6i_OgxQHaHa?rs=1&pid=ImgDetMain',
            currentPrice: '₹8,499',
            originalPrice: '₹12,999',
            discount: '35% Off',
            lowestPrice: '₹8,499',
            highestPrice: '₹12,999',
            priceDropInfo: 'Price dropped 25% (₹3,500 reduction) in Myntra this week',
        },
        {
            id: 5,
            name: 'Dell XPS 13 (Intel i7, 16GB RAM, 512GB SSD)',
            image: 'https://i5.walmartimages.com/asr/7e647601-e244-4cfe-ab90-0a212424bc58.acdb8f8c22ccf859de70169efeb529fb.jpeg',
            currentPrice: '₹1,14,999',
            originalPrice: '₹1,49,999',
            discount: '23% Off',
            lowestPrice: '₹1,14,999',
            highestPrice: '₹1,49,999',
            priceDropInfo: 'Price dropped 20% (₹25,000 reduction) in Amazon this week',
        },
        {
            id: 6,
            name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
            image: 'https://th.bing.com/th/id/OIP.dkIhej4lTLmGWQsS1LRfPgHaHa?rs=1&pid=ImgDetMain',
            currentPrice: '₹26,999',
            originalPrice: '₹34,999',
            discount: '23% Off',
            lowestPrice: '₹26,999',
            highestPrice: '₹34,999',
            priceDropInfo: 'Price dropped 15% (₹5,500 reduction) in Croma this week',
        },
        {
            id: 7,
            name: 'Apple iPhone 14 (128GB) - Midnight',
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505124_sd.jpg',
            currentPrice: '₹67,499',
            originalPrice: '₹79,900',
            discount: '15% Off',
            lowestPrice: '₹67,499',
            highestPrice: '₹79,900',
            priceDropInfo: 'Price dropped 10% (₹8,000 reduction) in Flipkart this week',
        },
        {
            id: 8,
            name: 'Samsung 55-inch 4K Ultra HD Smart LED TV',
            image: 'https://th.bing.com/th/id/OIP.RYww_EZ8NoiTmW3er6PP9AHaHa?rs=1&pid=ImgDetMain',
            currentPrice: '₹48,999',
            originalPrice: '₹69,999',
            discount: '30% Off',
            lowestPrice: '₹48,999',
            highestPrice: '₹69,999',
            priceDropInfo: 'Price dropped 20% (₹10,000 reduction) in Amazon this week',
        },
       
    ];

    
    const productList = products && Array.isArray(products) ? products : defaultProducts;

    return (
        <div className="content">
        <div className="flex min-h-screen bg-gray-100 p-8">
            {/* Filters Section (Left Side) */}
            <div className="w-[280px] min-w-[250px] bg-white shadow-md rounded-lg p-6">

                <Filters />
            </div>

            {/* Product List Section (Right Side) */}
            <div className="flex-1 flex flex-col gap-4 px-8">

                {productList.length > 0 ? (
                    productList.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="text-gray-600">No products available</p>
                )}
            </div>
        </div>
        </div>
    );
};

export default ProductList;

  