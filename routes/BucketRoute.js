const BucketRoute = require("express").Router();

// imports
const CreateBucketCtrl = require("../controllers/Bucket/CreateBucketCtrl");
const DeleteBucketCtrl = require("../controllers/Bucket/DeleteBucketCtrl");
const FetchAllBucksCtrl = require("../controllers/Bucket/FetchAllBuckets");
const FetchSingleBuckCtrl = require("../controllers/Bucket/FetchSingleBucket");
const UpdateBucketCtrl = require("../controllers/Bucket/UpdateBucketCtrl");

// !Routes

// create route
BucketRoute.route("/create").post(CreateBucketCtrl);
// read route
BucketRoute.route("/fetch").get(FetchAllBucksCtrl);
BucketRoute.route("/:id").get(FetchSingleBuckCtrl);
// update route
BucketRoute.route("/update").put(UpdateBucketCtrl);
// delete route
BucketRoute.route("/delete").put(DeleteBucketCtrl);

// exports
module.exports = BucketRoute;
