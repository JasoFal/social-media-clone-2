import React from "react";
import Post from "./Post";

const mainPostList = [
  {
    name: "Lorem Ipsum 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Lorem Ipsum 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Lorem Ipsum 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
]

function PostHistory() {
  return (
    <React.Fragment>
      <form>
        <input type="string" id="post-hist" name="post-hist" placeholder="What's happening?"/>
      </form>
      <hr/>
      {mainPostList.map((post, index) =>
        <Post name={post.name}
          text={post.text}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default PostHistory;

