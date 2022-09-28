import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RentingDetails from '../../components/RentingDetails';

const Renting = () => {

    const rentingId = useParams().id;

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     axios
    //     .get("./data/rentingsData.json")
    //     .then((res) => setData(res.data.filter(renting => renting.id === rentingId)[0]));
    // }, [])

    // console.log(data);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("./data/rentingsData.json")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setData(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }, [])

    console.log(data);


    if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
    return <div>Loading...</div>;
    } else {

        const dataFiltred = data.filter(renting => renting.id === rentingId)[0];
        // console.log(dataFiltred);

    return (
        <>
            <Header />
            <div className='renting-details'>
                <RentingDetails dataFiltred={dataFiltred}/>
            </div>
            <Footer />
        </>
    );
    }
};

export default Renting;