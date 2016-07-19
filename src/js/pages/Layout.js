import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    const space = {
      marginTop: "5px"
    }
    const width = {
      width: "30%"
    }
    console.log("layout");
    return (
      <div>

        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12 text-center">
              <h1>Interview Stories</h1>
              <textarea style={width} rows="3"></textarea>
              <br/>
              <button class="btn btn-large" style={space}>Submit your story</button>

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
