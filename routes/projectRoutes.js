const path = require("path");
const express = require("express");
const cwd = process.cwd();

module.exports = app => {
  app.get("/weather", (req, res) => {
    const filePath = path.resolve(cwd, "homepage", "build", "index.html");
    res.sendFile(filePath);
  });

  app.get("/movie-finder", (req, res) => {
    res.send("movie-finder");
  });

  app.get("/ryantube", (req, res) => {
    res.send("ryantube");
  });

  app.get("/squares-difference", (req, res) => {
    res.send("squares-difference");
  });
};
