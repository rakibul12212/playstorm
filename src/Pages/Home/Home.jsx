import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Hotbids from '../HotBids/HotBids';
import './Home.css'
import TopCollection from '../TopCollection/TopCollection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Hotbids></Hotbids>
            <TopCollection></TopCollection>
        </div>
    );
};

export default Home;