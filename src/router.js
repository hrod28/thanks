import React from 'react';
import {Router, Route, browserHistory, IndexRoute, Link } from 'react-router';


//import containers:
import Nav from './components/Nav.js';
import Validation from './components/parking.js'
import Hayashida from './components/hayashida.js'
import Parents from './components/mom-and-dad.js'
import Andrew from './components/andrew.js'
import Tom from './components/tom.js'
import Johnny from './components/johnny-and-family.js'
import Tammy from './components/rodriguez-chavez.js'
import Ryan from './components/ryan.js'
import Derek from './components/derek.js'
import Corey from './components/corey.js'
import Belle from './components/belle.js'
import Crystal from './components/crystal-kyle.js'
import Jorgensen from './components/sick-in-the-head-pepper-eaters.js'
import Gloria from './components/gloria.js'
import Emily from './components/emily.js'
import Lindsay from './components/lindsay.js'
import Marcus from './components/marcus.js'
import Chad from './components/chad.js'
import John from './components/john.js'
import Kyle from './components/kyle.js'
import Ponch from './components/ponch.js'
import Valerie from './components/valerie.js'
import Colleen from './components/colleen.js'
import Ellison from './components/ellison.js'
import Sammy from './components/sleep-fiend.js'


//import components:


var AppRouter = React.createClass({

  render: function(){
    return(
      <div>
        <Router history={browserHistory}>
          <Route path="/parking" component={Validation} />
          <Route path="/hayashida" component={Hayashida} />
          <Route path="/tom" component={Tom} />
          <Route path="/valerie" component={Valerie} />
          <Route path="/ellison" component={Ellison} />
          <Route path="/john" component={John} />
          <Route path="/colleen" component={Colleen} />
          <Route path="/kyle" component={Kyle} />
          <Route path="/chad" component={Chad} />
          <Route path="/belle" component={Belle} />
          <Route path="/corey" component={Corey} />
          <Route path="/ponch" component={Ponch} />
          <Route path="/gloria" component={Gloria} />
          <Route path="/derek" component={Derek} />
          <Route path="/marcus" component={Marcus} />
          <Route path="/mom-and-dad" component={Parents} />
          <Route path="/andrew" component={Andrew} />
          <Route path="/crystal-kyle" component={Crystal} />
          <Route path="/ryan" component={Ryan} />
          <Route path="/emily" component={Emily} />
          <Route path="/sleep-fiend" component={Sammy} />
          <Route path="/lindsay" component={Lindsay} />
          <Route path="/rodriguez-chavez" component={Tammy} />
          <Route path="/johnny-and-family" component={Johnny} />
          <Route path="/sick-in-the-head-pepper-eaters" component={Jorgensen} />
        </Router>
    </div>
    )
  }
})

export default AppRouter;
