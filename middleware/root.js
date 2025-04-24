const express = require("express");
const route = express.Router();
const path = require("path");

route.get("^/$|index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});
route.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "new-page.html"));
});
route.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html");
});
route.get("/spring-equinox(.html)?", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "views", "second_pages", "spring-equinox.html")
  );
});
route.get("/Nowrouz(.html)?", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "views", "second_pages", "Nowrouz.html")
  );
});
route.get("/haftsin(.html)?", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "views", "second_pages", "haftsin.html")
  );
});
module.exports = route;
route.get("/haftsin/Samanou(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "Haftsin", "samanou.html"));
});
route.get("/haftsin/Sabzeh(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "Haftsin", "sabzeh.html"));
});
route.get("/haftsin/Sekeh(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "Haftsin", "sekeh.html"));
});
route.get("/haftsin/Senjed(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "Haftsin", "senjed.html"));
});
route.get("/haftsin/Serkeh(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "Haftsin", "serkeh.html"));
});
route.get("/haftsin/sib(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "Haftsin", "sib.html"));
});
route.get("/haftsin/Sir(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "Haftsin", "sir.html"));
});

module.exports = route;
