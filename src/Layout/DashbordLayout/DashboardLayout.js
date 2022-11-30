import React, { useContext, useState } from 'react';
import Navbar from "../../Shared/Navbar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from '../../Shared/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [dashboardUser, setDashBoardUser] = useState({})
    const email = user?.email;

    fetch(`http://localhost:5000/users/${email}`)
        .then(res => res.json())
        .then(data => setDashBoardUser(data[0]));

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
                        {
                            (dashboardUser?.role === 'Buyer') &&
                            <li><Link to="/dashboard/buyer">My Order</Link></li>

                        }


                        {
                            dashboardUser?.role === 'Seller' && <>
                                <li><Link to="/dashboard/addProducts">Add Products</Link></li>
                                <li><Link to="/dashboard/myProducts">My Products</Link></li>

                            </>
                        }
                        {
                            dashboardUser?.role === 'Admin' && <>
                                <li><Link to="/dashboard/allSeller">All Sellers</Link></li>
                                <li><Link to="/dashboard/allBuyers">All Buyers</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;