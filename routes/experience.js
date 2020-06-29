var express = require('express');
const { put, post } = require('../app');
const { update } = require('../models/user');
const { requiresLogin, requiresHost } = require("../services/authenticationServiec")
const { createExperience, getAllExperience } = require("../controllers/experienceController")

var router = express.Router();

router.route("/experiences")
    .get(requiresLogin,requiresHost,getAllExperience)
    .post(requiresLogin, requiresHost, createExperience)

// router.route("./experiences/:experienceId")
// .put(updateExperience)
// .delete(deleteExperience)
// .get()



module.exports = router;