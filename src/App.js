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

<<<<<<< HEAD


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
=======
const BlogPage = () => {
  return <h1>Hello blogpage</h1>;
};
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
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
>>>>>>> 155f5b751d3a895774e8160500d65628eac9c9d3
  );
}

export default App;
