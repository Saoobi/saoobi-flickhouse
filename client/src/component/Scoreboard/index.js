import React from "react";
import PropTypes from "prop-types";

function Scoreboard({ currentScore, highestScore }) {
  return (
    <div className="Scoreboard">
      <div className="Scoreboard__CurrentScore Scoreboard__Score">
        <p>
          Current Score : <span>{currentScore}</span>
        </p>
      </div>
      <div className="Scoreboard__HighestScore Scoreboard__Score">
        <p>
          Highest Score : <span>{highestScore}</span>
        </p>
      </div>
    </div>
  );
}

Scoreboard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  highestScore: PropTypes.number.isRequired,
};

export default Scoreboard;
