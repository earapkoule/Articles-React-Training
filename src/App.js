import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.js";
import NotFound from "./components/NotFound/NotFound.js";
import React from "react";
import ReactDOM from "react-dom";

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
          <Route exact path="/"></Route>
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
