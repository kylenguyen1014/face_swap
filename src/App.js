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
  const initialState = {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  };
  const [isSignIn, setIsSignIn] = useState(false);
  const [user, setUser] = useState(initialState);

  const signIn = () => {
    setIsSignIn(true);
  }
  const signOut = () => {
    setIsSignIn(false);
    setUser(initialState);
  }
  
  return (
    <Switch className="App">
      <Route exact path='/register' render={(routeProps) => <Register isSignIn={isSignIn} signIn={signIn} {...routeProps} setUser={setUser}/> }/>
      <Route exact path='/signin' render={(routeProps) => <SignIn isSignIn={isSignIn} signIn={signIn} {...routeProps} /> }/>
      <Route exact path='/' render={(routeProps) => <Home isSignIn={isSignIn} signOut={signOut}/> }/>
    </Switch>
  );
}

export default App;
