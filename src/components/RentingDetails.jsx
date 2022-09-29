import React from 'react';
import Rating from '../components/Rating';
import ImageSlider from '../components/ImageSlider'


const RentingDetails = ({ dataFiltred }) => {
    const { title, pictures, description, host, rating, location, equipments, tags } = dataFiltred;

    return (
        <div className='rentingDetails'>
            <ImageSlider pictures={pictures}/>
            {/* {pictures.map((picture, index) => (
                <img src={picture} key={index} alt={`${title}, vue numéro ${index + 1}`} />
            ))} */}
            <div className="renting__title">
                <div className="renting__title--location">
                    <h2>{title}</h2>
                    <h4>{location}</h4>
                </div>
                <div className="renting__title--host">
                    <h5>{host.name}</h5>
                    <img src={host.picture} alt={host.name} className="host" />
                </div>
            </div>
            <div className="renting__attributes">
                <ul className="renting__attributes--tags">
                    {tags.map((tag, index) => (
                        <li key={index}>
                            {tag}
                        </li>
                    ))}
                </ul>
                <div className="renting__attributes--stars">
                    <Rating rating={rating} />
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
        </div>
    );
};

export default RentingDetails;