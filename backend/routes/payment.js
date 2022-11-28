const express = require("express");
const router = express.Router();

const {
    processPayment,
    sendStripeApi
} = require("../controllers/paymentController");

const { isAuthentiatedUser, authorizeRoles } = require("../middlewares/auth");

router.route("/payment/new").post(isAuthentiatedUser, processPayment);
router.route("/stripeapi").get(isAuthentiatedUser, sendStripeApi);


module.exports = router;
