import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Rentings = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get("./data/rentingsData.json")
        .then((res) => setData(res.data));
    }, [])
    console.log(data);

    return (
        <div className='rentings'>
            {data.map((renting) => (
                <Card key={renting.id} renting={renting}/>
            ))}
        </div>
    );
};

export default Rentings;