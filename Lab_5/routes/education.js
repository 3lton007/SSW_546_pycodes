const express = require("express");
const router = express.Router();

let edu =  [{
    "schoolName": "St.Pius X High School",
    "degree": "SSC",
    "favoriteClass": "Geometry",
    "favoriteMemory": "Having a Mortal Kombat Tournament in Computer Period"
  },

  {
    "schoolName": "Vani Vidyalaya",
    "degree": "HSC",
    "favoriteClass": "Geometry",
    "favoriteMemory": "Skipping Lecture to play Soocer afer Practicals"
  },

  {
    "schoolName": "Xavier Institute of Engineering",
    "degree": "BE",
    "favoriteClass": "Data Structures",
    "favoriteMemory": "Ironize: Rockband Concert Event, and we played five songs Maroon 5 - Animals, Greenday - 21 Guns, AC/DC Highway To hell, LinkinPark - Numb Encore/BleedItoutMix and Iron Maiden - Dance of Death"
  }]

router.get("/", async (req, res) => {
  try {
    res.send(edu);
  } catch (e) {
    // Something went wrong with the server!
    res.status(500).send();
  }
});

module.exports = router;