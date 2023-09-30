import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Hotbids from '../HotBids/HotBids';
import './Home.css'
import TopCollection from '../TopCollection/TopCollection';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Hotbids></Hotbids>
            <TopCollection></TopCollection>
            <SingleProduct></SingleProduct>
        </div>
    );
};

export default Home;