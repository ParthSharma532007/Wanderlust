const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const geocodeLocation = require("../utils/geocode.js");


module.exports.index = async (req, res) => {
  const { category } = req.query;

  let allListings;
  if (category) {
    allListings = await Listing.find({ category });
  } else {
    allListings = await Listing.find({});
  }

  res.render("listings/index.ejs", { allListings, category });
};



module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing =  async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews" , populate:{path:"author"}}).populate("owner");
    if(!listing){
        req.flash("error" , "Cannot find that listing!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });

};

module.exports.createListing = async (req, res, next) => {
       
        const newListing = new Listing(req.body.listing);

        console.log("FORM DATA:", req.body.listing);

        const geometry = await geocodeLocation(req.body.listing.location);
        if (!geometry) {
          req.flash("error", "Could not find that location, using default coordinates");
          newListing.geometry = {
            type: "Point",
            coordinates: [77.2090, 28.6139]
        };
        } else {
            newListing.geometry = geometry;
        }


        // for validate schema we need to write same code as above for title ,price ,...  
        // or another way use joi

        let url = req.file.path;
        let filename = req.file.filename;

        newListing.image = {url , filename};

        newListing.owner = req.user._id;
        await newListing.save();
        req.flash("success" , "New Listing Created!");
        res.redirect("/listings");
        //    console.log(listing);
};


module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error" , "Cannot find that listing!");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload/" , "/upload/w_250/");

    res.render("listings/edit.ejs", { listing , originalImageUrl});

};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if(typeof req.file !== 'undefined'){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url , filename};
    await listing.save();
    }

    req.flash("success" , "Listing Updated!");
    res.redirect(`/listings/${id}`);

};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success" , "Listing Deleted!");
    res.redirect("/listings");
};
