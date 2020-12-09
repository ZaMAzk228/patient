import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './app.css';

import {FirstPages,Register, Login} from '../pages';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={FirstPages}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App;