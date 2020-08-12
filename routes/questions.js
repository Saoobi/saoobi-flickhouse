const express = require("express");
const router = express.Router();

router.get("/question", (req, res) => {
  console.log("GET A QUESTION");

  //True or false question

  //Random movie (popular)
  //if true question: getRandomActorFromMovie(movie)
  //Random position of cast array
  //Send the content (id, name, img)
  //if false question: getRandomActorNotInMovie(movie)
  //getRandomPopularActor()
  //Return (id,name, img)
  //isInMovieCast(movie, id)
  //If true: send Content
  //If false : getRandomPopularActor()
});

module.exports = router;
