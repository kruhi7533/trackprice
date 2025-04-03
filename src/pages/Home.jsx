import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col">
      {/* Background Video */}
      <video className="fixed top-0 left-0 w-full h-full object-cover z-[-1]" autoPlay loop muted>
        <source src="/videos/background-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 to-black/30 pointer-events-none"></div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-screen text-white text-center px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide animate-slide-in">
            Welcome to <span className="text-blue-400">Price Tracker</span>
          </h1>
        </div>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl animate-fade-in">
          Track product prices, get smart recommendations, and never miss a deal.
        </p>
        <div className="mt-6 flex space-x-4 animate-fade-in">
          <Link to="/signup" className="bg-white text-black px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl">
            Get Started
          </Link>
          <Link to="/login" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl">
            Login
          </Link>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-900">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          {[
            { img: "/icons/price-tag.svg", title: "Real-Time Price Tracking", desc: "Stay updated with the latest product prices." },
            { img: "/icons/alert.svg", title: "Smart Price Alerts", desc: "Get notified when prices drop." },
            { img: "/icons/shopping-cart.svg", title: "Best Deals & Recommendations", desc: "Find the best deals on your favorite products." }
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center transition-all hover:scale-105 hover:shadow-lg">
              <img src={feature.img} className="w-16 mx-auto mb-4" alt={feature.title} />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About & Other Sections */}
      <div className="relative bg-white text-black py-20 px-6">
        {[
          { id: "about", title: "About Our Service", desc: "We help you track product prices, get alerts on discounts, and make the best purchase decisions." },
          { id: "reviews", title: "Customer Reviews", desc: "See what our users are saying about our price tracking service." },
          { id: "contact", title: "Contact Us", desc: "Have questions? Reach out to us anytime!" }
        ].map((section, index) => (
          <section key={index} id={section.id} className="py-16 bg-gray-100 rounded-lg shadow-lg mx-auto max-w-4xl mt-12">
            <h2 className="text-4xl font-extrabold text-center text-gray-900">{section.title}</h2>
            <p className="text-center mt-4 text-lg text-gray-700 max-w-3xl mx-auto">{section.desc}</p>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>&copy; 2025 Price Tracker. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms of Service</Link>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
