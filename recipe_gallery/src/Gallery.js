// Gallery.js
import React, { useState } from 'react';

const Gallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="gallery">
            <div className="image-container">
                <img src={images[currentIndex].url} alt={images[currentIndex].description} />
                <p>{images[currentIndex].description}</p>
            </div>
            <div className="navigation">
                <button onClick={goToPrev}>Previous</button>
                <button onClick={goToNext}>Next</button>
            </div>
        </div>
    );
};

export default Gallery;
