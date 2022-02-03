import React from "react";
import { Link } from "react-router-dom";
import Nav from '../components/Nav'
class Home extends React.Component {
  render () {
    const {handleChange, setHistory, search} = this.props
    return (
      <>
        {/* <div>Home</div> */}
        <Nav />
        <form>
          <input 
            type="text" 
            name="search" 
            id="search" 
            onChange={handleChange}
          />
          <Link to={`/search/${search}`}>
            <button 
              type="button"
              onClick={setHistory}
              >
              Pesquisar
            </button>
            </Link>
        </form>
      </>
    );
  }
}

export default Home;
