import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "../../static/icons/homeIcon.png";

function HomeButton() {
  return (
    <Link to="/" className="HomeButton">
      <img alt="Home Icon" src={HomeIcon} />
    </Link>
  );
}

export default HomeButton;
