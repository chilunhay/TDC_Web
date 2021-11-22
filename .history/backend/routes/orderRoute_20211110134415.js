const express = require('express');
const { newOrder, getSingleOrder, myOrder, getAllOrders } = require('../controllers/orderController');
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrder);

router.route("/admin/orders/").get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router.route("/admin/order/")

module.exports = router;
