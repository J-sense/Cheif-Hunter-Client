import React from 'react';
import Header from '../Header/Header';
import Footer from '../Header/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='m-0 p-0'>
            <Header></Header>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;