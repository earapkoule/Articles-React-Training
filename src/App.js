import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostPage from "./pages/PostPage/PostPage";
import NavBar from "./components/NavBar/NavBar";
import { CATEGORY_PATHS, POST, CONTACT, GALLERY } from "./utils/apiRoutes";
import { useDispatch } from "react-redux";
import { getAllPosts } from "./store/posts/actions";
import { theme } from "./config";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllPosts()), []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path={CONTACT} component={ContactPage} />
            <Route path={GALLERY} component={GalleryPage} />
            <Route
              exact
              path={CATEGORY_PATHS}
              render={(props) => {
                return <BlogPage category={props.match.params.category} />;
              }}
            ></Route>
            <Route exact path={POST} component={PostPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
