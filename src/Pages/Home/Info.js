import React from 'react';


const Info = () => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-1'>
            <div className="card card-side bg-base-100 shadow-xl ">
                <figure className='w-1/2'><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-shipping-design-template-62c154107c385e27756564fcf74622fb_screen.jpg?ts=1629452230" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className='text-xl font-bold' >FREE SHIPPING</h2>
                    <p className='font-medium'>ON ORDER OVER 500 TK</p>

                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w-1/2'><img src="https://www.pngitem.com/pimgs/m/443-4433940_replace-icon-hd-png-download.png" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className='text-xl font-bold'>REPLACEMENT</h2>
                    <p className='font-medium'>10 DAYS EASY REPLACEMENT.</p>

                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w-1/2'><img src="https://www.nicepng.com/png/detail/210-2109623_png-image-contact-icon-png-black.png" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className='text-xl font-bold'>01600000011</h2>
                    <p className='font-medium'>CUSTOMER SERVICE AVAILABLE</p>

                </div>
            </div>
        </div>
    );
};

export default Info;