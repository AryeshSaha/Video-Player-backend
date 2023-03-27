const expressAsyncHandler = require("express-async-handler");
const Bucket = require("../../models/BucketModel/BucketModel");

const CreateBucketCtrl = expressAsyncHandler(async (req, res) => {
  const checkName = await Bucket.findOne({ name: req.body.name });

  if (checkName)
    throw new Error("Another bucket contains the same name, please change.");

  try {
    const bucket = await Bucket.create({
      name: req.body.name,
    });
    res.json({ message: "New Bucket Created!", bucket });
  } catch (error) {
    res.json(error);
  }
});

module.exports = CreateBucketCtrl;
