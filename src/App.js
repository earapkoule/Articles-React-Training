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
  );
}

export default App;
