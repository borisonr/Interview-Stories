import React from "react";

import Post from "../components/Post";

export default class Popular extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;

    const Posts = [
      "Some Post",
      "Some Other Post",
      "Yet Another Post",
      "Still More",
      "Fake Post",
      "Partial Post",
      "Sad Post",
      "Happy Post",
    ].map((title, i) => <Post key={i} title={title}/> );

    return (
      <div>
        <h4>Most Popular</h4>
        <div>{Posts}</div>
      </div>
    );
  }
}
