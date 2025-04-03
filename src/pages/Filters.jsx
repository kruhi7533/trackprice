import React from 'react';
import './Filters.css';

const Filters = () => {
    return (
        <div className="filters">
            <h2 className="filters-header">FILTERS</h2>
            <div className="price-filter">
                <label htmlFor="min-price">Min Price:</label>
                <input type="number" min="0" />

                <label htmlFor="max-price">Max Price:</label>
                <input type="number" id="max-price" />
            </div>
            <div className="category-filter">
                <h3>Categories</h3>
                <ul>
                    <li><input type="checkbox" /> Category 1</li>
                    <li><input type="checkbox" /> Category 2</li>
                </ul>
            </div>
            <button className="clear-filters">Clear All</button>
        </div>
    );
};

export default Filters;
