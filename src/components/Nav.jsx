import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render () {
    return (
      <nav>
        {/* <div>Nav</div> */}
        <Link to="/" className="btn-nav">Home</Link>
        <Link to="/history" className="btn-nav">History</Link>
      </nav>
    );
  }
}

export default Nav;
