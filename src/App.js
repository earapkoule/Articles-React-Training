import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostPage from "./pages/PostPage/PostPage";
import NavBar from "./components/NavBar/NavBar";
import {
  CATEGORY_PATHS,
  POST,
  CONTACT,
  GALLERY,
  CREATE_NEW,
} from "./utils/apiRoutes";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useDispatch } from "react-redux";
import { getAllPosts } from "./store/posts/actions";
import { theme } from "./config";
import { ThemeProvider } from "./providers/ThemeProvider";
import NewPostPage from "./pages/NewPostPage/NewPostPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllPosts()), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <NavBar />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path={CONTACT} component={ContactPage} />
            <Route path={GALLERY} component={GalleryPage} />
            <Route path={CATEGORY_PATHS} component={BlogPage} />
            <Route path={POST} component={PostPage} />
            <Route path={CREATE_NEW} component={NewPostPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
