import React from "react";
import PropTypes from "prop-types";

function FriendButton(props) {
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <button id={props.name}>Button</button>
    </React.Fragment>
  );
}

FriendButton.propTypes = {
  name: PropTypes.string
}

export default FriendButton;