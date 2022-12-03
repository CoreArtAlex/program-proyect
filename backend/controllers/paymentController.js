const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const apikey=process.env.STRIPE_SECRET_KEY;


console.log("KEY",process.env.STRIPE_SECRET_KEY);
//console.log("STRRRRIPE",stripe);
// Process stripe payments   =>   /api/v1/payment/process

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
    console.log ("STRIPE"+apikey);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'usd',

        metadata: { integration_check: 'accept_a_payment' }
    });

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    })

    
})

// Send stripe API Key   =>   /api/v1/stripeapi
exports.sendStripApi = catchAsyncErrors(async (req, res, next) => {
    
     res.status(200).json({
         stripeApiKey: process.env.STRIPE_API_KEY
     })

})
