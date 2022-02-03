import React from "react";
import Nav from '../components/Nav'

class Search extends React.Component {
  render () {
    const buscaTerm = this.props.match.params.searchTerm
    return (
      <>
        <div className="title-page">Search Page</div>
        <p>{buscaTerm}</p>
        <Nav />
      </>
    );
  }
}

export default Search;
