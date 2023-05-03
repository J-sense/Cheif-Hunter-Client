import React from 'react';
import Header from '../../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Header/Footer';

const Loginlayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Loginlayout;