import React from "react";
import Bio from "./Bio";

function NameCard() {
  const name = "Kellie A. Corrigan"
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <a href="">Tweets</a>
      <a href="">Followers</a>
      <a href="">Fololowers</a>
      <hr />
      <Bio />
    </React.Fragment>
  );
}

export default NameCard;