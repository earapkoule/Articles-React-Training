import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from "./components/Banners/Banners";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostPage from "./pages/PostPage/PostPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import FooterMobile from "./components/Footer/FooterMobile";
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
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((_theme) => ({
  app: {
    background: "#FFFFFF",
  },

  content: {
    margin: "85px 15vw 0",
    minHeight: "calc(100vh - 250px - 85px)",
    padding: "35px 0",
    "@media (max-width:960px)": {
      minHeight: "calc(100vh - 250px - 85px)",
      margin: "85px 0 0",
      padding: "35px 20px",
    },
  },
}));

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const isTablet = useMediaQuery("(max-width:960px)");
  useEffect(() => dispatch(getAllPosts()), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Grid container className={classes.app}>
          <Grid item xs={12}>
            <NavBar />
            <Banner />
          </Grid>
          <Grid
            item
            xs={12}
            color="secondary"
            className={[classes.pageMargin, classes.content].join(" ")}
          >
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path={CONTACT} component={ContactPage} />
              <Route path={GALLERY} component={GalleryPage} />
              <Route path={CATEGORY_PATHS} component={BlogPage} />
              <Route path={POST} component={PostPage} />
              <Route path={CREATE_NEW} component={NewPostPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Grid>
          <Grid item xs={12}>
            {isTablet ? <FooterMobile /> : <Footer />}
          </Grid>
        </Grid>
      </Router>
    </ThemeProvider>
  );
}

export default App;
