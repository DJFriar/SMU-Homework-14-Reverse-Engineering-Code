const path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/api-routes-js", (req, res) => {
    res.render("api-routes-js");
  });
  app.get("/config-json", (req, res) => {
    res.render("config-json");
  });
  app.get("/html-routes-js", (req, res) => {
    res.render("html-routes-js");
  });
  app.get("/index-js", (req, res) => {
    res.render("index-js");
  });
  app.get("/isAuthenticated-js", (req, res) => {
    res.render("isAuthenticated-js");
  });
  app.get("/login-html", (req, res) => {
    res.render("login-html");
  });
  app.get("/login-js", (req, res) => {
    res.render("login-js");
  });
  app.get("/members-html", (req, res) => {
    res.render("members-html");
  });
  app.get("/members-js", (req, res) => {
    res.render("members-js");
  });
  app.get("/package-json", (req, res) => {
    res.render("package-json");
  });
  app.get("/passport-js", (req, res) => {
    res.render("passport-js");
  });
  app.get("/server-js", (req, res) => {
    res.render("server-js");
  });
  app.get("/signup-html", (req, res) => {
    res.render("signup-html");
  });
  app.get("/signup-js", (req, res) => {
    res.render("signup-js");
  });
  app.get("/style-css", (req, res) => {
    res.render("style-css");
  });
  app.get("/user-js", (req, res) => {
    res.render("user-js");
  });
}