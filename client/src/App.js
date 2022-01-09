import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import DestinationDetails from './pages/DestinationDetails';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="nav-header">
        <Nav />
      </header>
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route
          path="/destinations/:destinationId"
          render={(props) => <DestinationDetails {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
