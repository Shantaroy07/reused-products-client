import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])



    return (
        <div className='my-5 container mx-auto' >
            <h1 className='text-2xl font-semibold text-blue-600 my-3'>Books Category</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    categories.map(category =>

                        <div className="card card-compact w-96 bg-gray-300 shadow-xl">
                            <figure><img className='h-48' src={category.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl ">{category.category_name}</h2>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary"><Link to={`/category/${category.category_name}`}>See Books</Link> </button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Categories;