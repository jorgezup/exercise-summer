import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import History from './pages/History';
import Search from './pages/Search';

class App extends React.Component {
  constructor() {
    super();
    this.state ={
      search:'',
      history: []
    };
  }
 
  handleChange = ({target}) => {
    const {value} = target;
    this.setState({
      search:value,
    });
  }

  setHistory = () => {
    const {search} = this.state
    console.log(search)
    this.setState((prevState) => ({
      history: [...prevState.history, search]
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>Search App</h1>
        <div className='container'>
      <BrowserRouter>
        <Switch>
          <Route path="/history" render={(props) => <History {...props} {...this.state}/>}/>
          <Route path="/search/:searchTerm" component={Search}/>
          <Route path="/" render={
            (props) => 
            <Home 
              {...props} 
              {...this.state} 
              handleChange={this.handleChange}
              setHistory={this.setHistory}
            />}
          />
        </Switch>
      </BrowserRouter>
      </div>
      </div>

    );
  }
}

export default App;
