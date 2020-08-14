import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Timer({ startTime, handleTimerEnd }) {
  const [timer, setTimer] = useState(startTime);

  useEffect(() => {
    const timeLeft = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    timer == 0 && handleTimerEnd();

    return () => clearInterval(timeLeft);
  }, [timer]);

  return (
    <div className="Timer">
      <div className="Timer__Container">
        <h2 className="Timer__Container__Text">{timer}</h2>
      </div>
    </div>
  );
}

Timer.propTypes = {
  startTime: PropTypes.number.isRequired,
};

export default Timer;
