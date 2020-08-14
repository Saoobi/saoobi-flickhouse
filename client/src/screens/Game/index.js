import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { newQuestion, checkQuestionResult } from "../../API/";
import HomeButton from "../../component/HomeButton";
import Loader from "../../component/Loader";
import Question from "../../component/Question";
import Scoreboard from "../../component/Scoreboard";
import Timer from "../../component/Timer";

function Game() {
  const history = useHistory();

  const [isSearching, setIsSearching] = useState(false);
  const [actor, setActor] = useState({});
  const [movie, setMovie] = useState({});

  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(
    sessionStorage.getItem("highestScore") || 0
  );

  useEffect(() => {
    if (currentScore > highestScore) {
      setHighestScore(currentScore);
      sessionStorage.setItem("highestScore", currentScore);
    }
  }, [currentScore]);

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

  function redirectEndGame(score) {
    history.push({
      pathname: "/gameover",
      state: { currentScore: currentScore },
    });
  }

  function handleResultClick(answer) {
    checkQuestionResult(actor.id, movie.id).then((result) => {
      if (result === answer) {
        setCurrentScore(currentScore + 1);
        getQuestion();
      } else {
        //Call Game Over Screen
        redirectEndGame();
      }
    });
  }

  function handleTimerEnd() {
    redirectEndGame();
  }

  return (
    <div className="Game">
      <HomeButton />
      <Timer startTime={60} handleTimerEnd={handleTimerEnd} />
      {isSearching ? (
        <Loader />
      ) : (
        <Question
          actor={actor}
          movie={movie}
          handleResultClick={handleResultClick}
        />
      )}
      <Scoreboard
        currentScore={currentScore}
        highestScore={parseInt(highestScore)}
      />
    </div>
  );
}

export default Game;
