import React from "react";
// import TextInput from 'react-native'

function Header() {
  const [number, onChangeNumber] = React.useState('');
  return (
    <React.Fragment>
      <button id="home-button">Home</button>
      <button id="notification-button">Notifications</button>
      <button id="message-button">Messages</button>
      {/* <TextInput
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Search"
      /> */}
    </React.Fragment>
  );
}

export default Header;