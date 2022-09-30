import React from 'react';
import Rating from '../components/Rating';
import ImageSlider from '../components/ImageSlider'


const RentingDetails = ({ dataFiltred }) => {
    const { title, pictures, description, host, rating, location, equipments, tags } = dataFiltred;

    return (
        <div className='renting-details'>
            <ImageSlider pictures={pictures} />

            <div className="renting__title--container">
                <div className="renting__title">
                    <div className="renting__title--location">
                        <h2>{title}</h2>
                        <h3>{location}</h3>
                    </div>
                    <ul className="renting__title--tags">
                        {tags.map((tag, index) => (
                            <li key={index}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="renting__host">
                    <div className="renting__host--profile">
                        <h3>{host.name.split(" ")[0]}<br />{host.name.split(" ")[1]}</h3>
                        <img src={host.picture} alt={host.name} className="host" />
                    </div>
                    <div className="renting__host--stars">
                        <Rating rating={rating} />
                    </div>
                </div>
            </div>

            <div className="renting__description">
                <ul className="renting__description--description">
                    <li>
                        <input type="checkbox" />
                        <i></i>
                        <h2>Description</h2>
                        <p>{description}</p>
                    </li>
                </ul>
                <ul className="renting__description--equipments">
                    <li>
                        <input type="checkbox" />
                        <i></i>
                        <h2>Equipements</h2>
                        <ul>
                            {equipments.map((equipment, index) => (
                                <li key={index}>
                                    {equipment}
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default RentingDetails;