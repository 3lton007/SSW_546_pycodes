const express = require("express");
const router = express.Router();

let story = {
    "storyTitle": "Hidden Leaf Village of Konoha",
    "story": " Konoha is the hidden village of the Land of Fire. As the village of one of the Five Great Shinobi Countries, Konohagakure has a Kage as its leader known as the Hokage, of which there have been seven in its history. \n Konoha resides deep within a forest at the base of a mountain known as the Hokage Rock, which has the faces of all those who have taken the office of Hokage engraved on it. While generally seen as the most powerful of the ninja villages, Konoha has enjoyed many years of relative peace and stability. \n The standard attire for Konoha shinobi consists of blue or black shirts which may or may not have swirl patterns on the shoulders, along with matching coloured pants under a green flak jacket which also has a red swirl on the back, and pockets on the chest area. They also tend to wrap bandages around their legs. Many Konohagakure ninja use Fire Release techniques."
  }
  

router.get("/", async (req, res) => {
  try {
    res.send(story);
  } catch (e) {
    // Something went wrong with the server!
    res.status(500).send();
  }
});

module.exports = router;