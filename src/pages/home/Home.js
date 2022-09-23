import React from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Renting from '../../components/Rentings';

const Home = () => {
    return (
        // console.log(process.env.PRIVATE_KEY)
        <>
            <Header />
            <Hero />
            <Renting />
        </>
    );
};

export default Home;