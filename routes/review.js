const express = require("express");
const router = express.Router({mergeParams: true}); // we do it because if we add comment then it shows error that id is not defined because id does not come through link
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview , isLoggedIn , isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js");



//Reviews
//Post Route
router.post("/",isLoggedIn , validateReview , wrapAsync(reviewController.createReview));

//Delete route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports = router;