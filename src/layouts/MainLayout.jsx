import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;