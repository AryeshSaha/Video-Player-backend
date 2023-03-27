const mongoose = require("mongoose");

const CardSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a name"],
    },

    link: {
      type: String,
      required: [true, "Card can't be linkless"],
    },

    bucket: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bucket",
    },

    playCount: {
      type: Number,
      default: 0,
    },

    lastPlayed: {
      type: Date,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamp: true,
  }
);

const Card = mongoose.model("Card", CardSchema);
module.exports = Card;
