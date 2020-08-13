import React from "react";
import { Link } from "react-router-dom";

import FlickHouseImage from "../../static/images/flickhouse.png";
import ClapperboardIcon from "../../static/icons/clapperboard.png";
function Home() {
  return (
    <div className="Home">
      <div className="Home__ImageContainer">
        <div className="Home__ImageContainer__Image">
          <img alt="FlickHouse Logo" src={FlickHouseImage} />
        </div>
      </div>

      <div className="Home__Content">
        <div className="Home__Content__Text">
          <p>Welcome to the quizz !</p>
          <p>
            You'll be asked a series of "Yes or No" questions. Answer as many as
            you can in the allowed time ! Good luck !
          </p>
          <p>All about your cinematographic culture</p>
          <p>Get ready...</p>
        </div>
        <Link className="Home__Content__StartButton" to={`/game`}>
          <div className="Home__Content__StartButton__Image">
            <img alt="Clapperboard icon" src={ClapperboardIcon} />
            <p>Action !</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
