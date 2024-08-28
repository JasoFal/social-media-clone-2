import React from "react";

function Header() {
  return (
    <React.Fragment>
      <div class="col-lg-6">
        <button id="home-button">Home</button>
        <button id="notification-button">Notifications</button>
        <button id="message-button">Messages</button>
      </div>
      <div class="col-lg-2">
        <input type="string" id="search" name="search" placeholder="Search"/>
      </div>
      <div class="col-lg-2">
        <form>
          <button id="tweet-button">Tweet</button>      
        </form>
      </div>
    </React.Fragment>
  );
}

export default Header;