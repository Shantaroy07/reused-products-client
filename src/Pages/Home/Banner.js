import React from 'react';

const Banner = () => {
    return (

        <div className=''>
            <div className="hero my-4 min-h-screen " style={{ backgroundImage: `url("https://media.istockphoto.com/id/1153885263/photo/knowledge-sharing-between-people.jpg?s=612x612&w=0&k=20&c=l_d71Q02hJo5CyrdVsWrLTZo-oKUl1TEdoJIFxTGEMg=")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-5xl font-bold">Buy and Sell Your Books For The Best Price </h1>
                        <p className="mb-3">From applied literature to educational resources, we have a lot  of textbooks to offer you.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;