const express = require("express");
const serverConfig = require("./config/serverConfig");
const dbConnect = require("./config/dbConnect");
const app = express();

// This is middleware Architecture It Takes 3 Parameter Function (req, res, next)=>{}
app.use(
  "/user",
  (req, res, next) => {
    console.log("middleware function is Called");
    next();
  },
  (req, res) => {
    res.send("Hello User");
  }
);
app.use("/hii", (req, res) => {
  res.send("Hello ");
});

// First connect to database and then listen on the PORT
dbConnect()
  .then(() => {
    console.log("Connected To DB Successfully"); // After connected to DB then listen on the PORT
    app.listen(serverConfig.PORT, () => {
      console.log(`Server is listening at port ${serverConfig.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`ERROR: When connected to Database : ${error}`);
  });
