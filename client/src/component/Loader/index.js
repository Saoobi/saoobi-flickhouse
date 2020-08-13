import React from "react";
import PropTypes from "prop-types";

import loadingLogo from "../../static/images/loading.gif";

function Loader({ width = 300, height = 200 }) {
  return (
    <div className="LoadingImg">
      <img width={width} height={height} src={loadingLogo} alt="loading..." />
    </div>
  );
}

Loader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Loader;
