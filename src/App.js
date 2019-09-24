import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Logo from './component/Logo';
import Images from './component/Images';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <Images/>
    </div>
  );
}

export default App;
