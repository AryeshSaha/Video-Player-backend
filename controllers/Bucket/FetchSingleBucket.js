const expressAsyncHandler = require("express-async-handler");
const Bucket = require("../../models/BucketModel/BucketModel");
const validId = require("../../utils/validId");

const FetchSingleBuckCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;

  validId(id);

  const checkBucket = await Bucket.findById(id);

  if (!checkBucket) throw new Error("Bucket doesn't exist");

  try {
    const bucket = await Bucket.findById(id).populate("Card");
    res.json({ message: "Fetching successful", bucket });
  } catch (error) {
    res.json(error);
  }
});

module.exports = FetchSingleBuckCtrl;
