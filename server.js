const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const Port = process.env.port || 7000;

const whiteAddressListArrayForSearch = [
  "http://google.com",
  "http://127.0.0.1:5500",
  "http://localhost:7000/",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whiteAddressListArrayForSearch.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("There is an error"));
    }
  },
  optionsSuccessStatus: 200,
  credential: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// server static files
app.use("/", express.static(path.join(__dirname, "./public")));
app.use("/subview", express.static(path.join(__dirname, "./public/subniew/")));

app.use("/", require("./middleware/root.js"));
app.use("/subview", require("./middleware/subdir.js"));
app.use("/spring-equinox", require("./middleware/second_pages.js"));
app.use("/Nowrouz", require("./middleware/second_pages.js"));
app.use("/haftsin", require("./middleware/second_pages.js"));
app.use("/employees", require("./middleware/employee/employees.js"));
app.use("/haftsin/sabzeh", require("./middleware/second_pages.js"));
app.use("/haftsin/Samanou", require("./middleware/second_pages.js"));
app.use("/haftsin/Sekeh", require("./middleware/second_pages.js"));
app.use("/haftsin/Senjed", require("./middleware/second_pages.js"));
app.use("/haftsin/Serkeh", require("./middleware/second_pages.js"));
app.use("/haftsin/Sib", require("./middleware/second_pages.js"));
app.use("/haftsin/Sir", require("./middleware/second_pages.js"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 not found" });
  } else {
    res.type("text").send("404 not found");
  }
});

app.listen(Port, (req, res) => {
  console.log("Hello Sahar");
});
