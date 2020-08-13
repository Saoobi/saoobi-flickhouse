import React from "react";
import PropTypes from "prop-types";

import FalseIcon from "../../static/icons/false.png";
import TrueIcon from "../../static/icons/true.png";

function Question({ actor, movie }) {
  return (
    <div className="Question">
      <div className="Question__Text">
        <h2>
          Did <span>{actor.name}</span> play in <span>{movie.title}</span> ?
        </h2>
      </div>
      <div className="Question__Images">
        <div className="Question__Images__Actor">
          <img
            alt="Actor"
            src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
          />
        </div>
        <div className="Question__Images__Movie">
          <img
            alt="Movie"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          />
        </div>
      </div>
      <div className="Question__Answer">
        <div className="Question__Answer__Icon ">
          <img alt="False Icon" src={FalseIcon} />
        </div>
        <div className="Question__Answer__Icon">
          <img alt="False Icon" src={TrueIcon} />
        </div>
      </div>
    </div>
  );
}

Question.propTypes = {
  actor: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
};

export default Question;
