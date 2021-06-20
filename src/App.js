import React from 'react';
import Hotels from './pages/Hotels'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      
      <Switch>
        <Route exact path="/" component={Hotels}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
