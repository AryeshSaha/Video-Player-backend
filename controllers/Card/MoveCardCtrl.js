const expressAsyncHandler = require("express-async-handler");
const Bucket = require("../../models/BucketModel/BucketModel");
const Card = require("../../models/CardModel/CardModel");
const validId = require("../../utils/validId");

const MoveCardCtrl = expressAsyncHandler(async (req, res) => {
  const { oldBuckId, newBuckId, cardId } = req.body;

  validId(oldBuckId);
  validId(newBuckId);
  validId(cardId);

  try {
    const moveCard = await Card.findByIdAndUpdate(
      cardId,
      {
        bucket: newBuckId,
      },
      {
        new: true,
      }
    );
    await Bucket.findByIdAndUpdate(
      oldBuckId,
      {
        $inc: {
          cardCount: -1,
        },
      },
      {
        new: true,
      }
    );
    
    await Bucket.findByIdAndUpdate(
      newBuckId,
      {
        $inc: {
          cardCount: 1,
        },
      },
      {
        new: true,
      }
    );

    res.json({ message: "bucket changed  successfully", moveCard });
  } catch (error) {
    res.json(error);
  }
});

module.exports = MoveCardCtrl;
