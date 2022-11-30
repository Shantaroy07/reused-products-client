import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../Shared/AuthProvider';

const AllSeller = () => {
    const { user } = useContext(AuthContext)
    const [allSellers, setAllSellers] = useState([])


    fetch('http://localhost:5000/allSellers?role=Seller')
        .then(res => res.json())
        .then(data => {
            setAllSellers(data)

        })


    return (
        <div>
            <h3 className="text-3xl mb-5">All Sellers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSellers &&
                            allSellers?.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button className='btn btn-secondary btn-sm'>Delete</button> </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;