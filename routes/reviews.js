var express = require('express');
var router = express.Router();
const{getReviewList,createReview} = require("../controllers/reviewController")


router.route("/reviews")
.get(getReviewList)
.post(createReview)

module.exports = router;
