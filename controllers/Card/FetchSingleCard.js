const expressAsyncHandler = require("express-async-handler");
const Card = require("../../models/CardModel/CardModel");
const validId = require("../../utils/validId");

const FetchSingleCardCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req.body;
  validId(id);

  const checkCard = await Card.findById(id);

  if (!checkCard) throw new Error("Card doesn't exist");

  try {
    const card = await Card.findById(id);
    res.json({ message: `${card.title} fetch successful`, card });
  } catch (error) {
    res.json(error);
  }
});

module.exports = FetchSingleCardCtrl;
