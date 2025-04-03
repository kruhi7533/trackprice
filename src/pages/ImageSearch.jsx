import React, { useState } from 'react';

const ImageSearch = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Searching for similar products for:', image);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl">Image Search</h2>
      <p>Upload product image to search similar products.</p>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default ImageSearch;
