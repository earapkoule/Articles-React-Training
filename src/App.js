import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar/NavBar";
import { CATEGORY_PATHS, POST_PATHS } from "./utils/apiRoutes";
import { theme } from './config';
import { ThemeProvider } from './providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={ContactPage} />
            <Route
              exact
              path={CATEGORY_PATHS}
              render={(props) => {
                return <BlogPage category={props.match.params.category} />;
              }}
            ></Route>
            <Route exact path={POST_PATHS} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
