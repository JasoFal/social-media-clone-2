import React from 'react';
import Header from './Header';
import NameCard from './NameCard';
import PostHistory from './PostHistory';
import FriendButtonList from './FriendButtonList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <NameCard />
      <PostHistory />
      <FriendButtonList />
    </React.Fragment>
  );
}

export default App;

