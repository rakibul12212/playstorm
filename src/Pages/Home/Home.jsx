import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Hotbids from '../HotBids/HotBids';
import './Home.css'
import TopCollection from '../TopCollection/TopCollection';
import SingleProduct from '../SingleProduct/SingleProduct';
import PopulerCard from '../PopulerCard/PopulerCard';
import CreateNfts from '../CreateNfts/CreateNfts';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Hotbids></Hotbids>
            <TopCollection></TopCollection>
            <SingleProduct></SingleProduct>
            <PopulerCard></PopulerCard>
            <CreateNfts></CreateNfts>
        </div>
    );
};

export default Home;