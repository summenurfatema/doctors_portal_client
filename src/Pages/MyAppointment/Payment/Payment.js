import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51MA3ZzJzZa0chHCf36CZQuvoduuBQh9ex5rPHdTjLrsGI0vvusZ2PEBxB6w4mdlWhXgBkiySzafDjDC2lUukbkTF00aiPiDVZN');
const Payment = () => {
    const data = useLoaderData()
    return (
        <div className=''>
            <div className='flex flex-col items-center pt-6'>
                <p>Payment for {data.treatment}</p>
                Please pay <strong>{data.price}$</strong> for your appointment on {data.slot}
            </div>
            <div className='mt-5 border-2 w-96'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>

    );
};

export default Payment;