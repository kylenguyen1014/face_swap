import React, {useState, useEffect} from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import SignIn from './SignIn';
import Page from './Page';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

function App() {
  const initialState = {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  };
  const [isSignIn, setIsSignIn] = useState( JSON.parse(localStorage.getItem('isSignIn')) || false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || initialState);

  useEffect(() => {
    // Update user and signin session
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isSignIn', JSON.stringify(isSignIn));
  });

  const signIn = () => {
    setIsSignIn(true);
  }
  const signOut = () => {
    setIsSignIn(false);
    setUser(initialState);
  }
  const updateEntries = (newEntries) => {
    setUser({...user, entries: newEntries});
  }
  
  return (
    <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={300} classNames='page'>
            <Switch className="App" location={location}>
              <Route exact path='/register' render={(routeProps) =><Page> <Register isSignIn={isSignIn} signIn={signIn} {...routeProps} setUser={setUser}/> </Page>} />
              <Route exact path='/signin' render={(routeProps) =><Page> <SignIn isSignIn={isSignIn} signIn={signIn} {...routeProps} setUser={setUser}/> </Page>} />
              <Route exact path='/' render={(routeProps) =><Page> <Home isSignIn={isSignIn} signOut={signOut} user={user} updateEntries={updateEntries}/> </Page>} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

export default App;
