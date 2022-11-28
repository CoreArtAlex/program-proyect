const catchAsyncErrors = require('../middleweares/catchAsyncErrors');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// Process stripe payments
exports.processPayment = catchAsyncErrors(async(re,res,next) =>{

    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'cad',
        metadata: { integration_check: 'accept_a_payment'}
    });

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    });

});

//Send Stripe API Key
exports.sendStripeApi = catchAsyncErrors(async(re,res,next) =>{
    
    res.status(200).json({
        stripeApiKey: process.env.STRIPE_API_KEY
    });

});