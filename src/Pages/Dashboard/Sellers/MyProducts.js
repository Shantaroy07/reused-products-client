import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Shared/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/myProduct?email=${user?.email}`;

    const { data: products = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className="text-3xl mb-5">My Product</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Buying Price</th>
                            <th>Selling Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products &&
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <th className="mask mask-squircle w-12 h-12"> <img src={product.img} alt="" /></th>
                                <td>{product.name}</td>
                                <td>{product.category_name}</td>
                                <td>{product.buying_price}</td>
                                <td>{product.selling_price}</td>

                                <td><button className='btn btn-secondary btn-sm'>Delete</button> </td>
                                <td><button className='btn btn-primary btn-sm'>Advertise</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;