const express = require("express");
const { reset } = require("nodemon");
const { registerUser, loginUser, logout, forgotPassword } = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").post(reset);

router.route("/logout").get(logout);

module.exports = router;
