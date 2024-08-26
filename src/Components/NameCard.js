import React from "react";

function NameCard() {
  const name = "Kellie A. Corrigan"
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <a href="">Tweets</a>
      <a href="">Followers</a>
      <a href="">Fololowers</a>
    </React.Fragment>
  );
}

export default NameCard;