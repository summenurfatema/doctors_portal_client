import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';


const DashBooard = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>

        </div>
    );
};

export default DashBooard;