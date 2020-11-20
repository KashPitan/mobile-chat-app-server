const Express = require("express");
const dotenv = require("dotenv");

dotenv.config();

//sets up express app
const App = Express();

App.get("/", (res, req, next) => {
  res.send("SUCCESS");
});

//listen for requests on set up variable OR port 4000
App.listen(process.env.port || 4000, () => {
  console.log("listening on port 4000");
});
