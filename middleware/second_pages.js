const express = require("express");
const route = express.Router();
const path = require("path");

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
route.get("/haftsin/Sabzeh(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "Haftsin", "sabzeh.html"));
});
route.get("/haftsin/Samanou(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "Haftsin", "samanou.html"));
});
route.get("/haftsin/sekeh(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "Haftsin", "sekeh.html"));
});
route.get("/haftsin/senjed(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "Haftsin", "senjed.html"));
});
route.get("/haftsin/serkeh(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "Haftsin", "serkeh.html"));
});
route.get("/haftsin/sib(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "Haftsin", "sib.html"));
});
route.get("/haftsin/Sir(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "Haftsin", "sir.html"));
});

module.exports = route;
