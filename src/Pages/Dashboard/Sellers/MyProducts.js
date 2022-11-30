import React from 'react';

const MyProducts = () => {
    return (
        <div>
            <h3 className="text-3xl mb-5">My Order</h3>
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
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;