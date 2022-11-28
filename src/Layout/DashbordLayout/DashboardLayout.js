import React from 'react';
import Navbar from "../../Shared/Navbar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const DashboardLayout = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard/buyer">My Order</Link></li>

                        <li><Link to="/dashboard/addProducts">Add Products</Link></li>
                        <li><Link to="/dashboard/myProducts">My Products</Link></li>
                        <li><Link to="/dashboard/allSeller">All Sellers</Link></li>
                        <li><Link to="/dashboard/allBuyers">All Buyers</Link></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;