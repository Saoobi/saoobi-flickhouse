import React, { useEffect, useState } from "react";

import { newQuestion, checkQuestionResult } from "../../API/";
import HomeButton from "../../component/HomeButton";
import Loader from "../../component/Loader";
import Question from "../../component/Question";
import Scoreboard from "../../component/Scoreboard";
import Timer from "../../component/Timer";

function Game() {
  const [isSearching, setIsSearching] = useState(false);
  const [actor, setActor] = useState({});
  const [movie, setMovie] = useState({});

  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  function getQuestion() {
    setIsSearching(true);
    newQuestion().then((result) => {
      setIsSearching(false);
      setActor(result.actor);
      setMovie(result.movie);
    });
  }
  useEffect(() => {
    getQuestion();
  }, []);

  function handleResultClick(answer) {
    checkQuestionResult(actor.id, movie.id).then((result) => {
      if (result == answer) {
        setCurrentScore(currentScore + 1);
        getQuestion();
      } else {
        //Call Game Over Screen
        console.log("t'as faux!");
      }
    });
  }

  function handleTimerEnd() {
    console.log("end");
  }

  return (
    <div className="Game">
      <HomeButton />
      <Timer startTime="60" handleTimerEnd={handleTimerEnd} />
      {isSearching ? (
        <Loader />
      ) : (
        <Question
          actor={actor}
          movie={movie}
          handleResultClick={handleResultClick}
        />
      )}
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
    </div>
  );
}

export default Game;
