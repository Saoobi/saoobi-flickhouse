import React, { useEffect, useState } from "react";

import { newQuestion } from "../../API/";
import Question from "../../component/Question";
import Loader from "../../component/Loader";
function Game() {
  const [actor, setActor] = useState({});
  const [movie, setMovie] = useState({});

  const [isSearching, setIsSearching] = useState(false);

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

  return (
    <div className="Game">
      {isSearching ? <Loader /> : <Question actor={actor} movie={movie} />}
    </div>
  );
}

export default Game;
