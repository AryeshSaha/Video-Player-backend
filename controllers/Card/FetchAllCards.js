const expressAsyncHandler = require("express-async-handler");
const Card = require("../../models/CardModel/CardModel");

const FetchAllCardsCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const cards = await Card.find().populate("bucket");
    res.json({ message: "Fetching successful", cards });
  } catch (error) {
    res.json(error);
  }
});

module.exports = FetchAllCardsCtrl;
