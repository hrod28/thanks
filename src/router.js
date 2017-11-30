import React from 'react';
import {Router, Route, browserHistory, IndexRoute, Link } from 'react-router';


//import containers:
import Nav from './components/Nav.js';
import Validation from './components/parking.js'
import Hayashida from './components/hayashida.js'


//import components:


var AppRouter = React.createClass({

  render: function(){
    return(
      <div>
        <Router history={browserHistory}>
          <Route path="/parking" component={Validation} />
          <Route path="/hayashida" component={Hayashida} />
        </Router>
    </div>
    )
  }
})

export default AppRouter;
