import React from 'react';
import Home from "./Home/Home";
import {Route} from "react-router-dom";

const App = () => (
  <div>
      <div>App component! x</div>

      <Route path="/" component={Home}/>
  </div>
);

export default App;
