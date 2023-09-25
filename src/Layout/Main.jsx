import React from 'react';
import Home from '../Pages/Home/Home';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';


const Main = () => {
    return (
        <>
           <Navbar></Navbar> 
           <Outlet></Outlet>
           <Footer></Footer>
        </>
    );
};

export default Main;