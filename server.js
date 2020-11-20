const Express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const App = Express();

App.get("/", (req, res, next) => {
  res.send("SUCCESS");
});

App.listen(process.env.port || 8080, () => {
  console.log("listening on port 8080");
});
