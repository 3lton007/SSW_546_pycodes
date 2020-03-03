const express = require("express");
const router = express.Router();

let about = {
  "name": "Elton Aloysius",
  "cwid": "10456065",
  "biography": "Hi I am Elton. I am a graduate student in MS - Software Engineering. I have received a B.E in Computer Engineering from Xavier Institute of Engineering, Mumbai. I have done projects such as SMART CITY TRAVELER that provides with route which helps tourist visit places with their personalized interest in a certain period of time using Android Studio Development. Movie Ticket Booking System using Python GUI Toolkit. Blood Bank Management System using PHP and MySQL and lot more. \n Apart from Technical side of mine, I love playing Guitar and listening to music, Watching movies and Anime",
  "favoriteShows": ["Naruto", "BreakingBad", "Sherlock", "DeathNote", "OnePiece", "Supernatural"],
  "hobbies": ["Guitar", "Gaming", "Music"]
}

router.get("/", async (req, res) => {
  try {
    res.send(about);
  } catch (e) {
    // Something went wrong with the server!
    res.status(500).send();
  }
});

module.exports = router;