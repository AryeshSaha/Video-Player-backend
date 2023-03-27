const expressAsyncHandler = require("express-async-handler");
const Bucket = require("../../models/BucketModel/BucketModel");
const validId = require("../../utils/validId");

const DeleteBucketCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req.body;

  validId(id);

  const checkBucket = await Bucket.findById(id);

  if (!checkBucket) throw new Error("Bucket doesn't exist");

  try {
    const bucket = await Bucket.findByIdAndRemove(id);
    res.json({ message: `${bucket.name} is deleted successfully`, bucket });
  } catch (error) {
    res.json(error);
  }
});

module.exports = DeleteBucketCtrl;
