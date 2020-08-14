import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import ClapperboardIcon from "../../static/icons/clapperboard.png";
import HomeButton from "../../component/HomeButton";

function GameOver() {
  const location = useLocation();
  const params = location.state;

  const currentScore = params.currentScore;
  const highestScore = localStorage.getItem("highestScore") || 0;
  return (
    <div className="Gameover">
      <HomeButton />
      <div className="Gameover__Title">
        <h2 className="Gameover__Title__Text">Game Over</h2>
      </div>
      <div className="Gameover__Score">
        <div className="Gameover__Score__Text">
          <p>
            Your Score : <span>{currentScore}</span>
          </p>
        </div>
        <div className="Gameover__Score__Text">
          <p>
            Highest Score:
            <span>{highestScore}</span>
          </p>
        </div>
      </div>
      <div className="Gameover__RetryButton">
        <Link className="Gameover__RetryButton__Image" to={`/game`}>
          <img alt="Clapperboard icon" src={ClapperboardIcon} />
          <p>Try again !</p>
        </Link>
      </div>
    </div>
  );
}

export default GameOver;
