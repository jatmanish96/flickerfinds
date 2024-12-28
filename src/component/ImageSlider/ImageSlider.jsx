import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; 

const ImageSlider = () => {
    // Image sources
    const images = [
        'https://rukminim1.flixcart.com/fk-p-flap/1620/200/image/6e5064d8c01aa70d.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/c886e3f9a30fee79.png?q=50',
        'https://rukminim2.flixcart.com/fk-p-flap/50/50/image/d94141ed984b3d92.jpg?q=50'

    ];

    // State for the current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Handle the previous slide
    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    // Automatic slide change every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container">
            {/* Image Slider */}
            <div className="slider">
                <img src={images[currentIndex]} alt="Slider" />
            </div>

            {/* Navigation Buttons */}
            
        </div>
    );
};

export default ImageSlider;
