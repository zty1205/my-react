import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import index from './view/index'
import gerber from './view/gerber'

function App() {
  return (
    <HashRouter>
        <Switch>
        <Route exact path="/" component={index}>首页</Route>
            <Route exact path="/gerber" component={gerber}>gerber</Route>
        </Switch>
    </HashRouter>
  );
}

export default App;
