import React from 'react'
import './App.css';
import NavBar from './NavBar'
import Home from './Home'


function App() {
  return (
    <div className="App">
      <div className='navbar-app'>
        <NavBar />
      </div>
      
    

    <div>
      <Home />
    </div>
    </div>
  );
}

export default App;
