import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RentingDetails from '../../components/RentingDetails';
import E404 from '../e404/E404';

const Renting = () => {

    const rentingId = useParams().id;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("rentingsData.json")
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

    if (error) {
        return <div>Error: {error.message}</div>;
    } else {

        const dataFiltred = data.filter(renting => renting.id === rentingId);

        if (dataFiltred.length === 0) {
            return (
                <>
                    <E404 />
                </>
            )
        }

        return (
            <>
                {isLoaded ?
                    <>
                        <Header />
                            <div className='renting-details-container'>
                                <RentingDetails dataFiltred={dataFiltred[0]} />
                            </div>
                        <Footer />
                    </>
                    :
                    <div className="loading">Loading...</div>
                }
            </>
        );
    }
};

export default Renting;