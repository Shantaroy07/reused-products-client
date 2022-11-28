import React, { useContext } from 'react';
import { AuthContext } from '../../../Shared/AuthProvider'


const BookingOrder = ({ product }) => {

    const { user } = useContext(AuthContext);


    return (
        <>
            <input type="checkbox" id="booking-order" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-order" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-10'>

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