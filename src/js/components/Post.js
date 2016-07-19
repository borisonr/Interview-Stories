import React from "react";

export default class Post extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div>
        <a class="btn btn-default pull-left" href="#">Upvote</a>
        <a class="btn btn-default pull-left" href="#">Share</a>
        <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.</p>
        <hr/>
      </div>
    );
  }
}
