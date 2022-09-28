import React from 'react';

const RentingDetails = ({dataFiltred}) => {
    const {title, pictures, description, host, rating, location, equipments, tags} = dataFiltred;

    return (
        <>
        <div className='rentingDetails'>
            {pictures.map((picture, index) => (
                <img src={picture} key={index} alt={`${title}, vue numéro ${index + 1}`} />
            ))}
        </div>
            <h2>{title}</h2>
            <p>{pictures}</p>
        </>
    );
};

export default RentingDetails;