import React, { useContext } from 'react';
import { AuthContext } from '../../../Shared/AuthProvider';
import toast from 'react-hot-toast';


const BookingOrder = ({ product }) => {

    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;

        const phone = form.phone.value;
        const delivery_location = form.location.value;

        const booking = {
            name: user?.displayName,
            email: user?.email,
            price: product.selling_price,
            phone,
            delivery_location,
            img: product.img,

        }


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('Booking confirmed');

                }
                else {
                    toast.error(data.message);
                }
            })


    }


    return (
        <>
            <input type="checkbox" id="booking-order" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-order" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input type="text" disabled value={user?.displayName} className="input w-full input-bordered " />
                        <input type="text" disabled value={user?.email} className="input w-full input-bordered " />
                        <input type="text" disabled value={product.selling_price} className="input w-full input-bordered " />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Delivery Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingOrder;