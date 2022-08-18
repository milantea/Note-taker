const router = require("express").router;
const fs = require("fs");
const path = require("path");
//will need to import some other functions(possibly)

//api get request all notes
router.get("/notes/", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, jsonData) => {
    if (err) throw err;
    const { notes } = JSON.parse(jsonData);
    res.json(notes);
  });
});

//api get note with particular id
router.get("/notes/id", (req, res) => {});

//post new note db.json file
router.post("/notes/", (req, res) => {});

//api delete note with particular id
router.delete("/notes/id", (req, res) => {});

module.exports = "router";
