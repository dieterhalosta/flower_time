import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51Hw5RkHLvLnxU6ULZ77BtvFLg1XNdfNHiMEIWkHk57TmADtutclCUB9hwr3SBWbhgsj2aYQhOWIpDjotG8iSS7rc00cOxmvxq1";

const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Flower Time'
            billingAddress={true}
            shippingAddress={true}
            image='../assets/logo.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;