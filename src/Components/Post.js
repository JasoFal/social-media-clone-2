import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.text}</p>
      <hr/>
    </React.Fragment>
  );
}

Post.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string
}

export default Post;