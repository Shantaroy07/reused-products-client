import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../Shared/AuthProvider';

const AllBuyers = () => {
    const { user } = useContext(AuthContext)
    const [allBuyers, setAllBuyers] = useState([])


    fetch('http://localhost:5000/allBuyers?role=Buyer')
        .then(res => res.json())
        .then(data => {
            setAllBuyers(data)

        })


    return (
        <div>
            <h3 className="text-3xl mb-5">All Buyers</h3>
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
                            allBuyers &&
                            allBuyers?.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button className='btn btn-secondary btn-sm'>Delete</button> </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;