const CreateCardCtrl = require("../controllers/Card/CreateCardCtrl");
const DeleteCardCtrl = require("../controllers/Card/DeleteCardCtrl");
const FetchAllCardsCtrl = require("../controllers/Card/FetchAllCards");
const FetchSingleCardCtrl = require("../controllers/Card/FetchSingleCard");
const MoveCardCtrl = require("../controllers/Card/MoveCardCtrl");
const UpdateCardCtrl = require("../controllers/Card/UpdateCardCtrl");

const CardRoute = require("express").Router();

// !Routes

// Create
CardRoute.route("/create").post(CreateCardCtrl);
// Read
CardRoute.route("/fetch").get(FetchAllCardsCtrl);
CardRoute.route("/:id").get(FetchSingleCardCtrl);
// Update
CardRoute.route("/update").put(UpdateCardCtrl);
// Delete
CardRoute.route("/delete").put(DeleteCardCtrl);
// Move Card
CardRoute.route("/move").put(MoveCardCtrl)

// exports
module.exports = CardRoute;
