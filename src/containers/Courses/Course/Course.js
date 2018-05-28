import React, { Component } from "react";
import URLSearchParams from "url-search-params";

class Course extends Component {
  render() {
    const title = new URLSearchParams(this.props.location.search).get("title");

    return (
      <div>
        <h1>{title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
