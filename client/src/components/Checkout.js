import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { placeOrder } from "../redux/Actions/orderActions"

import StripeCheckout from "react-stripe-checkout";

const Checkout = ({subtotal}) => {
  // const orderstate = useSelector((state) => state.placeOrderReducer);

    const dispatch = useDispatch();

    function tokenHander(token) {
        console.log(token);
        dispatch(placeOrder(token, subtotal));

      }
  return (
    <div>
         <StripeCheckout
          amount={subtotal*100} 
          shippingAddress
          token={tokenHander}
          stripeKey='pk_test_51KlMveFG2bUEBaPVFo6nfqAxqv9TFePDFjNxeUa7zOuRI5rPLbdoi0GWxlaVTCII93hYuvfxI4EJ3pI2Pc2pSRO800fU9mw7qF'
          currency="EUR"
        >
          <button className="btn">Pay Now</button>
        </StripeCheckout>
    </div>
  )
}

export default Checkout