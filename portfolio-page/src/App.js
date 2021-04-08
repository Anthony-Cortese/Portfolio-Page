import React from 'react'
import './App.css';
import NavBar from './NavBar'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import {Switch, Route} from 'react-router-dom'
import AboutMe from './AboutMe';


function App() {
  return (
    <div className="App">
      <div className='navbar-app'>
        <NavBar />
      </div>
      
    

    <div>
      
    </div>
    <Switch>
      
      <Route exact path='/'>
        <Home />
      </Route>
      
      <Route exact path='/Projects'>
        <Projects />
      </Route>

      <Route exact path='/AboutMe'>
        <AboutMe />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
