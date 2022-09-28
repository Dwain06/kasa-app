import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({renting}) => {
    return (
        <figure className="card">
            <Link to={ `/renting_id=${renting.id}` }>
                <img src={renting.cover} alt={"Photo " + renting.title} />
                <figcaption>
                    <h3>{renting.title}</h3>
                </figcaption>
            </Link>
        </figure>
    );
};

export default Card;