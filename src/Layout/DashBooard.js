import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';


const DashBooard = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-end">
                <input id="drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link>Sidebar Item 1</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBooard;