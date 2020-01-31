const express = require("express"); // import express
const bodyParser = require("body-parser"); // import body-parser
const app = express();
const cwd = process.cwd();

app.use(express.json());

app.use("/static", express.static(__dirname + "/homepage"));
app.use(express.static(__dirname + "/public"));
require("./routes/projectRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // EXPRESS will serve up production assets like our main.js or main.css file
  // handles from react router
  app.use(express.static("client/build"));
  // EXPRESS will serve up the index.html file if it doesnt recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
// tells NODE to listen on Port 5000
app.listen(PORT);
