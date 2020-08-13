import React from "react";

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
          <p>One Minute, No mistakes</p>
          <p>All about your cinematographic culture</p>
          <p>Get ready...</p>
        </div>
        <div className="Home__Content__StartButton">
          <div className="Home__Content__StartButton__Image">
            <img alt="Clapperboard icon" src={ClapperboardIcon} />
            <p>Action !</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
