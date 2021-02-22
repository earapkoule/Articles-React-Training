
function App() {
  return (
    <Router>
      <div>
        {/*
          auto tha ginei to navbar component
        */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lifestyle">Life style</Link>
          </li>
          <li>
            <Link to="/travel">Travel</Link>
          </li>
          <li>
            <Link to="/fashion">Fashion</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        {/*
          An to pame me auth th logikh diaforetika component gia kathe selida
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/lifestyle">
            <Lifestyle />
          </Route>
          <Route path="/travel">
            <Travel />
          </Route>
          <Route path="/fashion">
            <Fashion />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        {/*
          alliws!!!!
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:category" render={(props) => { (<BlogPage category={props.match.params.category} />) }}>
          </Route>
          <Route path="/:category/:id"  >
            <BlogPost></BlogPost>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
