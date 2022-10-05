import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Rentings = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        axios
            .get("./data/rentingsData.json")
            .then((res) => {
                setData(res.data);
                setIsLoaded(true);
            });
    }, [])

    return (
        <>
        {isLoaded ?
            <div className='rentings-container'>
                <div className='rentings'>
                    {data.map((renting) => (
                        <Card key={renting.id} renting={renting} />
                    ))}
                </div>
            </div>
        :
            <div className="loading">Loading...</div>
        }
        </>
    );
};

export default Rentings;