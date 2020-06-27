var express = require('express');
var router = express.Router();
const { getUserList, createUser, login, logout } = require("../controllers/userController")


router.route("/users")
    .get(getUserList)
    .post(createUser)


router.route("/auth/login")
    .post(login)


router.route("/auth/logout")
    .post(logout)

module.exports = router;
