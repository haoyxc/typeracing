import React from "react";
import { Link, Route } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Horizons Directory</h1>
        <h2>Click the link below to go to the directory.</h2>
        {/* Link to /directory here */}
        <Link to="/directory">Directory</Link>
        {/* <Route path="/directory" component={Directory} /> */}
      </div>
    );
  }
}

export default Home;
