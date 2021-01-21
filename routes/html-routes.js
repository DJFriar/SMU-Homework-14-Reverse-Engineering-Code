const path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/config-json", (req, res) => {
    res.render("config-json");
  });
  app.get("/server-js", (req, res) => {
    res.render("server-js");
  });
}