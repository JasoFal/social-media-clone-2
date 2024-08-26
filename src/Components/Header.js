import React from "react";

function Header() {
  return (
    <React.Fragment>
      <button id="home-button">Home</button>
      <button id="notification-button">Notifications</button>
      <button id="message-button">Messages</button>
      <form>
        <input type="string" id="search" name="search" placeholder="Search"/>
      </form>
      <button id="tweet-button">Tweet</button>
    </React.Fragment>
  );
}

export default Header;