import React from 'react';
// import logo from './logo.svg';
import './App.css';
import '../src/assets/css/common.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import index from './view/index'
import gerber from './view/gerber'
import noMatch from './view/noMatch'

function App() {
  return (
    <HashRouter>
        <Switch>
          <Route exact path="/" component={index}></Route>
          <Route exact path="/gerber" component={gerber}></Route>
          <Route component={noMatch}/> 
        </Switch>
    </HashRouter>
  );
}

export default App;
