import React from "react";
import Nav from '../components/Nav'
class History extends React.Component {
  render () {
    const {history}  = this.props
    return (
      <div>
        <div className="title-page">History Page</div>
        <Nav />
        <div className="history">
          {
            history.map((hist, index) => (<p key={index}>{hist}</p>))
          }
        </div>
      </div>
    );
  }
}

export default History;
