const expressAsyncHandler = require("express-async-handler");
const Bucket = require("../../models/BucketModel/BucketModel");
const validId = require("../../utils/validId");

const UpdateBucketCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req.body;

  validId(id);

  const checkBucket = await Bucket.findById(id);

  if (!checkBucket) throw new Error("Bucket doesn't exist");

  try {
    const updateBuck = await Bucket.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.json({
      message: `Bucket of id: ${id} has been successfully updated`,
      updateBuck,
    });
  } catch (error) {
    res.json(error);
  }
});

module.exports = UpdateBucketCtrl;
