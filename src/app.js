const express = require("express");
const serverConfig = require("./config/serverConfig");

const app = express();

app.use("/hii", (req, res) => {
  res.send("Hello ");
});
app.listen(serverConfig.PORT, () => {
  console.log(`Server is listening at port ${serverConfig.PORT}`);
});
