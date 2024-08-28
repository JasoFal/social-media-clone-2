import React from 'react';
import Header from './Header';
import NameCard from './NameCard';
import PostHistory from './PostHistory';
import FriendButtonList from './FriendButtonList';

function App() {
  return (
    <React.Fragment>
      <div class="container">
        <div class="row">
          <Header />
        </div>
        <div class="row">
          <div class="col-lg-3">
            <NameCard />
          </div>
          <div class="col-lg-4">
            <PostHistory />
          </div>
          <div class="col-lg-4">
            <FriendButtonList />   
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

