const expressAsyncHandler = require("express-async-handler");
const Bucket = require("../../models/BucketModel/BucketModel");

const FetchAllBucksCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const buckets = await Bucket.find();
    res.json({ message: "Fetching successful", buckets });
  } catch (error) {
    res.json(error);
  }
});

module.exports = FetchAllBucksCtrl;
