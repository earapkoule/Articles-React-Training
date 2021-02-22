import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

import NavBar from './components/NavBar/NavBar.js'

function App() {
  return (
    <Router>
      <div>
        {/*
          auto tha ginei to navbar component
        */}
        <NavBar></NavBar>

        <hr />

        <Switch>
          <Route exact path="/">
 
          </Route>
          <Route path="/:category" render={(props) => { (<BlogPage category={props.match.params.category} />) }}>
          </Route>
          <Route path="/:category/:id"  >
             
          </Route>
          <Route path="/contact">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
