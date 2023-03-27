const express = require("express");
const cors = require("cors");
const DbCon = require("./config/db/DbCon");
const BucketRoute = require("./routes/BucketRoute");
const CardRoute = require("./routes/CardRoute");

const app = express();

// Db Connect
DbCon();

//regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"]
}));

//! Routes
// Bucket Route
app.use("/api/bucket/", BucketRoute);
// Card Route
app.use("/api/card/", CardRoute);

module.exports = app;
