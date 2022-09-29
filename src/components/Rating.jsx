import React from 'react';

const Rating = ({ rating }) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<img src="star.png" key={"full" + i} alt="star rating full" />);
    }
    for (let j = 0; j < 5-rating; j++) {
        stars.push(<img src="star_grey.png" key={"empty" + j} alt="star rating empty" />);
    }
    
    return stars;
};

export default Rating;