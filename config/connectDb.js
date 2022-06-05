const mongoose = require("mongoose");
require("dotenv").config();

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database is connected successfully..!");
  } catch (error) {
    console.log("database is not connected");
  }
};

module.exports = ConnectDB;
