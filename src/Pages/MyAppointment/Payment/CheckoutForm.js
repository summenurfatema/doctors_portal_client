import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const [cardError, setCardError] = useState('')
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            console.log(error)
            setCardError(error.message)
        }
        else { setCardError('') }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button className='btn btn-sm btn-primary mt-5' type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;