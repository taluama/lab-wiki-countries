import React, { Component } from 'react';
import './App.css';
import List from './components/list/List.js';
import Info from './components/info/Info.js';
import Nav from './components/nav/Nav.js';
import Countries from './countries.json';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Route path='/info/:country-code' component={Info}/>
        <Nav />
        <div className="flex-thing">
         <List countries={Countries} />
          <div className="info-place"></div>
        </div>
      </div>
    );
  }
}

export default App;