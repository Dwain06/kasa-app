import React from 'react';
import star from "../assets/img/star.png"
import star_grey from "../assets/img/star_grey.png"

const Rating = ({ rating }) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<img src={star} key={"full" + i} alt="star rating full" />);
    }
    for (let j = 0; j < 5-rating; j++) {
        stars.push(<img src={star_grey} key={"empty" + j} alt="star rating empty" />);
    }
    
    return stars;
};

export default Rating;