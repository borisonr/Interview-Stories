import React from "react";

import Post from "../components/Post";

export default class Newest extends React.Component {
  render() {
    const Posts = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
    ].map((title, i) => <Post key={i} title={title}/> );

    console.log("featured");
    return (
      <div>
      <h4 >Newest</h4>
        <div>{Posts}</div>
      </div>
    );
  }
}
