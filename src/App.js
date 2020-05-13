import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const PhapluatPage = () => (
  <div>
    <h1>PHÁP LUẬT PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/phapluat' component={PhapluatPage} />
      </Switch>
    </div>
  );
}

export default App;