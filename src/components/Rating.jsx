import React from 'react';

const Rating = ({ rating }) => {
    console.log(rating);
    var stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<img src="star.png" alt="" />);
    }
    for (let j = 0; j < 5-rating; j++) {
        stars.push(<img src="star_grey.png" alt="" />);
    }
    return stars;
};

export default Rating;