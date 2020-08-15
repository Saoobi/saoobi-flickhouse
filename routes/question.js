require("dotenv").config();

const express = require("express");
const axios = require("axios");
const router = express.Router();

const API = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY;

function getRandomBoolean() {
  //If >= 0.5 : true
  //If < 0.5 : false
  return Math.random() >= 0.5;
}

function getRandomNumber(startNb, endNb) {
  return Math.floor(Math.random() * endNb) + startNb;
}

async function randomMovie() {
  //500 pages of 20 movies
  //Get random page
  const randomPage = getRandomNumber(1, 500);

  const urlPath = `${API}/movie/popular?api_key=${API_KEY}&page=${randomPage}`;

  try {
    const response = await axios.get(urlPath);
    const results = response.data.results;
    //Take one random movie from the results array (list of 20 movies)
    const randomNumber = getRandomNumber(1, results.length) - 1;
    return results[randomNumber];
  } catch (error) {
    console.error("error", error);
  }
}

//if true question: getRandomActorFromMovie(idMovie)
async function getRandomActorFromMovie(movieId) {
  //Get a random actor from credit cast
  const urlPath = `${API}/movie/${movieId}/credits?api_key=${API_KEY}`;

  try {
    const response = await axios.get(urlPath);
    const results = response.data.cast;
    //Take one random actor from the results array
    const randomNumber = getRandomNumber(1, results.length) - 1;

    const actor = results[randomNumber];

    //Make sure picture is available
    return !actor.profile_path ? getRandomActorFromMovie(movieId) : actor;
  } catch (error) {
    console.error("error", error);
  }
}

//Check if actor is playing on a movie
async function isOnCreditCast(actorId, movieId) {
  const urlPath = `${API}/movie/${movieId}/credits?api_key=${API_KEY}`;

  try {
    const response = await axios.get(urlPath);
    const results = response.data.cast;

    let filter = results.filter((result) => result.id == actorId);

    return Array.isArray(filter) && filter.length ? true : false;
  } catch (error) {
    console.error("error", error);
  }
}

//if false question: getRandomActorNotFromMovie(idMovie)
async function getRandomActorNotFromMovie(movieId) {
  //500 pages of 20 popular actors
  //Get random page
  const randomPage = getRandomNumber(1, 500);

  //Get a random actor (popular)
  const urlPath = `${API}/person/popular?api_key=${API_KEY}&page=${randomPage}`;

  try {
    const response = await axios.get(urlPath);
    const results = response.data.results;
    //Take one random actor from the results array (list of 20 actors)
    const randomNumber = getRandomNumber(1, results.length) - 1;

    const actor = results[randomNumber];

    //Make sure he's not on movieId
    const isOnMovie = await isOnCreditCast(actor.id, movieId);

    //Make sure picture is available aswell
    return isOnMovie || !actor.profile_path
      ? getRandomActorNotFromMovie(movieId)
      : actor;
  } catch (error) {
    console.error("error", error);
  }
}

router.get("/question", async (req, res) => {
  const question = {
    movie: null,
    actor: null,
  };

  //Get a true or false question
  const answerExpected = getRandomBoolean();

  //Get a random movie (popular)
  const movie = await randomMovie();
  question.movie = movie;

  //Get an actor
  const actor = answerExpected
    ? await getRandomActorFromMovie(movie.id)
    : await getRandomActorNotFromMovie(movie.id);
  question.actor = actor;

  res.json(question);
});

router.post("/question/answer", async (req, res) => {
  const actorId = req.body.actorId;
  const movieId = req.body.movieId;

  const isOnMovie = await isOnCreditCast(actorId, movieId);

  res.send(isOnMovie);
});

module.exports = router;
