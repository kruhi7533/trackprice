import React from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';
import { FiImage } from 'react-icons/fi';

const SearchBar = ({ searchTerm, setSearchTerm, onImageSearchClick }) => {
    return (
        <div className="search-bar-container">
            <FaSearch className="search-icon" />
            <input
                type="text"
                placeholder="Search Products/URL.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <FiImage className="image-icon" onClick={onImageSearchClick} />
        </div>
    );
};

export default SearchBar;
