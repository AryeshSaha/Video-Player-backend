const mongoose = require("mongoose");

const BucketSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Buckets can't be nameless"],
      unique: [true, "Name already exists"],
    },

    cardCount: {
      type: Number,
      default: 0,
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

// Populate Cards
BucketSchema.virtual("Card", {
  ref: "Card",
  foreignField: "bucket",
  localField: "_id",
});

const Bucket = mongoose.model("Bucket", BucketSchema);
module.exports = Bucket;
