const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing  = require("../models/listing.js")
const {isLoggedIn, isOwner , validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
// const { index } = require("..controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload  = multer({storage});


router
.route("/")

//index route
.get(wrapAsync(listingController.index))

// create route
.post(
  isLoggedIn,
  validateListing,
  upload.single('listing[image]'), 
  wrapAsync(listingController.createListing)
);

//New route
router.get("/new",isLoggedIn,listingController.renderNewForm);

router
.route("/:id")
  //show route
.get(wrapAsync(listingController.showListing))
//UPDATE ROUTE
.put(
  isLoggedIn,
  isOwner,
  upload.single('listing[image]'), 
  validateListing,
  wrapAsync(listingController.updateListing))

//DELETE ROUTE
.delete(
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.desrtoyListing));

//edit route
router.get("/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm));

module.exports = router;