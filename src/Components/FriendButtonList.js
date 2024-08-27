import React from "react";
import FriendButton from "./FriendButton";

const listOfFriendButtons = [
  {
    name: "Donec eu orci et 1"
  },
  {
    name: "Donec eu orci et 2"
  },
  {
    name: "Donec eu orci et 3"
  },
]

function FriendButtonList() {
  return (
    <React.Fragment>
      <h4>Lorem Ipsum</h4>
      <hr/>
      {listOfFriendButtons.map((friendButton, index) =>
        <FriendButton name={friendButton.name}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default FriendButtonList;