import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingOrder from './BookingOrder/BookingOrder';

const Products = () => {
    const products = useLoaderData();

    return (
        <div className=' ml-10 grid lg:grid-cols-2 grid-cols-1 gap-3 my-5 '>
            {
                products.map(product =>
                    <div className="card card-compact w-96 bg-gray-300 shadow-xl">
                        <figure><img className='h-48' src={product.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl ">{product.name}</h2>
                            <h2 className=" text-base p-2">{product.description}</h2>
                            <div className='flex '>
                                <p className='font-medium'>Selling Price: {product.selling_price} </p>
                                <p className='font-medium'>Buying Price: {product.buying_price} </p>
                            </div>
                            <div className='flex '>
                                <p className='font-medium'>Seller Name: {product.seller_name} </p>
                                <p className='font-medium'>Location: {product.location} </p>
                            </div>
                            <div className='flex '>
                                <p className='font-medium'>Used: {product.used} </p>
                                <p className='font-medium'>Posted: {product.post_time} </p>
                            </div>

                            <div className="card-actions justify-end mt-5">
                                <label
                                    htmlFor="booking-order"
                                    className="btn btn-primary text-white">Book Now</label>
                            </div>
                            <BookingOrder
                                product={product}
                            ></BookingOrder>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Products;