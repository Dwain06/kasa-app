import React, { useState } from 'react';

const ImageSlider = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const backgroundImage = {
        backgroundImage: `url(${pictures[currentIndex]})`
    };

    return (
        <div className='slider'>
            <div onClick={goToPrevious} className="arrow left"></div>
            <div onClick={goToNext} className="arrow right"></div>
            <div className="pictures" style={backgroundImage}></div>
            <div className="slideCount">
                {currentIndex + 1}/{pictures.length}
            </div>
        </div>
    );
};

export default ImageSlider;