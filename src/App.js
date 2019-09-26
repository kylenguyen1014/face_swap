import React, {useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Logo from './component/Logo';
import Images from './component/Images';
import { Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import SignIn from './SignIn';

function App() {
  const [isSignIn, setIsSignIn] = useState(false);

  const signIn = () => {
    setIsSignIn(true);
  }
  const signOut = () => {
    setIsSignIn(false);
  }
  return (
    <Switch className="App">
      <Route exact path='/register' render={(routeProps) => <Register isSignIn={isSignIn}/> }/>
      <Route exact path='/signin' render={(routeProps) => <SignIn isSignIn={isSignIn}/> }/>
      <Route exact path='/' render={(routeProps) => <Home isSignIn={isSignIn}/> }/>
    </Switch>
  );
}

export default App;
