import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar.js';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

import { theme } from './config';
import { ThemeProvider } from './providers/ThemeProvider';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          {/*
            auto tha ginei to navbar component
          */}
          <NavBar></NavBar>

          <hr />

          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/:category" render={(props) => { (<BlogPage category={props.match.params.category} />) }}>
            </Route>
            <Route path="/:category/:id"  >

            </Route>
            <Route path="/contact">

            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
