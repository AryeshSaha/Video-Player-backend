const mongoose = require("mongoose");
require("dotenv").config();

const DbCon = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Db connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = DbCon;