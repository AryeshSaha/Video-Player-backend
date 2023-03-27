const expressAsyncHandler = require("express-async-handler");
const Bucket = require("../../models/BucketModel/BucketModel");
const Card = require("../../models/CardModel/CardModel");
const validId = require("../../utils/validId");

const UpdateCardCtrl = expressAsyncHandler(async (req, res) => {
  const { buckId, id } = req.body;

  validId(id);

  const checkBucket = await Bucket.findById(buckId);

  if (!checkBucket) throw new Error("Bucket doesn't exist");

  const checkCard = await Card.findById(id);

  if (!checkCard) throw new Error("Card doesn't exist");

  try {
    const updateCard = await Card.findByIdAndUpdate(
      id,
      {
        ...req.body,
        bucket: buckId,
      },
      {
        new: true,
      }
    );
    res.json({
      message: `${updateCard.title} updation successful`,
      updateCard,
    });
  } catch (error) {
    res.json(error);
  }
});
module.exports = UpdateCardCtrl;
