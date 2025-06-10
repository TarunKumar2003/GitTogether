const mongoose = require("mongoose");
const serverConfig = require("./serverConfig");
// Write a async function to connect to the database
async function dbConnect() {
  try {
    await mongoose.connect(serverConfig.MONGO_URI);
  } catch (error) {
    console.log("ERROR: When connected to DB", error);
    process.exit(1);
  }
}

module.exports = dbConnect;
