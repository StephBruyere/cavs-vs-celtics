import ReactDOM from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import Celtics from "./pages/celtics";
import Cavs from "./pages/cavs";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
          <Route exact path="/celtics" component={Celtics} /> 
                    <Route exact path="/cavs" component={Cavs} /> 
                    <Route exact path="/" component={Cavs} /> 
      </Switch>    
      </div>
      </Router>
      
    );
  };
};


export default App;
