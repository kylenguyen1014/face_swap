import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Logo from './component/Logo';
import Images from './component/Images';
import { Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import SignIn from './SignIn';

function App() {
  return (
    <Switch className="App">
      <Route exact path='/register' render={(routeProps) => <Register/> }/>
      <Route exact path='/signin' render={(routeProps) => <SignIn/> }/>
      <Route exact path='/' render={(routeProps) => <Home/> }/>
    </Switch>
  );
}

export default App;
