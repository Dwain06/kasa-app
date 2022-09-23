import React from 'react';

const Card = ({renting}) => {
    return (
        <figure className="card">
            <a href="#">
                <img src={renting.cover} alt={"Photo " + renting.title} />
                <figcaption>
                    <h3>{renting.title}</h3>
                </figcaption>
            </a>
        </figure>
    );
};

export default Card;