const expressAsyncHandler = require("express-async-handler");
const Bucket = require("../../models/BucketModel/BucketModel");
const Card = require("../../models/CardModel/CardModel");
const validId = require("../../utils/validId");

const DeleteCardCtrl = expressAsyncHandler(async (req, res) => {
  const deletedCards = [];
  const { buckId, ids } = req.body;

  const checkBucket = await Bucket.findById(buckId);

  if (!checkBucket) throw new Error("Bucket doesn't exist");

  for (const id of ids) {
    validId(id);
    const checkCard = await Card.findById(id);

    if (!checkCard) throw new Error("Card doesn't exist");
  };
  
  try {

    for (const id of ids) {
      const deletedCard = await Card.findByIdAndRemove(id);
      deletedCards.push(deletedCard);
    }
    
    // update bucket card count
    await Bucket.findByIdAndUpdate(
      buckId,
      {
        $inc: {
          cardCount: -ids.length,
        },
      },
      {
        new: true,
      }
    );
    res.json({
      message: `deletion successful`,
      deletedCards,
    });
  } catch (error) {
    res.json(error);
  }
});

module.exports = DeleteCardCtrl;
