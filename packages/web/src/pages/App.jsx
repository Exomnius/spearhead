import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import LoadableHome from "./Home/LoadableHome";
import LoadableContact from './Contact/LoadableContact';

const App = () => (
  <div>
    <div>App component!x</div>

    <hr/>

    <Link to="/">Home page</Link>
    <Link to="/contact">Contact page</Link>

    <hr/>

    <Switch>
      <Route exact path="/" component={LoadableHome}/>
      <Route exact path="/contact" component={LoadableContact}/>
    </Switch>
  </div>
);

export default App;
