const expressAsyncHandler = require("express-async-handler");
const Bucket = require("../../models/BucketModel/BucketModel");
const Card = require("../../models/CardModel/CardModel");
const validId = require("../../utils/validId");

const CreateCardCtrl = expressAsyncHandler(async (req, res) => {
  const {buckId} = req.body;

  validId(buckId);

  const checkBucket = await Bucket.findById(buckId);

  if (!checkBucket) throw new Error("Bucket doesn't exist");

  try {
    const card = await Card.create({
      title: req.body.title,
      link: req.body.link,
      bucket: buckId,
    });

    // update bucket card count
    await Bucket.findByIdAndUpdate(
      buckId,
      {
        $inc: {
          cardCount: 1,
        },
      },
      {
        new: true,
      }
    );
    res.json({ message: `${card.title} has been created`, card });
  } catch (error) {
    res.json(error);
  }
});

module.exports = CreateCardCtrl;
