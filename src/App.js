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

 
const categoryPaths = [
  "/fashion",
  "/lifestyle",
  "/travel",
  "/gallery",
  "/contact",
];
const postPaths = categoryPaths.map((path) => path + "/:id");

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact"></Route>
            <Route
              exact
              path={categoryPaths}
              render={(props) => {
                return <BlogPage category={props.match.params.category} />;
              }}
            ></Route>
            <Route exact path={postPaths}></Route>
            <Route path="*">
              
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
