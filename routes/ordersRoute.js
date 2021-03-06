const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51KlMveFG2bUEBaPViHfio7oyjHcQhdgex0qrWv5Q3e2l17gsDVBIHbx2cHQ2FwUGr4GUoL4CRJeA61FXn3FFn4Yi00olkObxia")
const Order = require("../models/orderModel")


router.post("/placeorder", async(req, res) => {

    const { token, subtotal, currentUser, cartItems } = req.body

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const payment = await stripe.charges.create({
            amount: subtotal * 100,
            currency: "EUR",
            customer: customer.id,
            receipt_email: token.email

        }, {
            idempotencyKey: uuidv4()
        })
        if (payment) {

            const newOrder = new Order({
                name: currentUser.name,
                email: currentUser.email,
                userid: currentUser._id,
                orderItems: cartItems,
                orderAmount: subtotal,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    zipcode: token.card.address_zip
                },
                transactionId: payment.source.id
            })
            newOrder.save()

            res.send('Order placed successfully')
        } else {
            res.send('Payment Failed')
        }
    } catch (error) {
        return res.status(400).json({ message: 'Something Went Wrong' + error })
    }




})
router.post("/getuserorders", async(req, res) => {
    const { userid } = req.body
    try {
        const orders = await Order.find({ userid: userid }).sort({ _id: -1 });
        res.send(orders)
    } catch (error) {
        return res.status(400).json({ message: 'something went wrong' + error })
    }
});
module.exports = router;