'use strict';

import React, { Component } from 'react';
import Iframe from 'react-iframe';
import { Router, browserHistory, location } from 'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import {orange500, blue500} from 'material-ui/styles/colors';
import Nav from '../components/Nav.js';

const styles = {
  errorStyle: {
    color: "#90C15B",
  },
  underlineStyle: {
    borderColor: "#90C15B",
  },
  floatingLabelStyle: {
    color: "#90C15B",
  },
  floatingLabelFocusStyle: {
    color: "#90C15B",
  },
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

const Hayashida = React.createClass({


  render: function(){
    return(

      <div>
      <Nav />
      <div class="videoWrapper">
        <Card className="uiCardMenu">
            <Iframe url="http://www.youtube.com/embed/EglH16OKZBY?rel=0"
            marginRight="50px"
            width="95%"
            height="550px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen/>

        <Card className="uiCardMenu1">
          <p> Uncle Lloyd and Auntie Carol </p>
          <p> Since you were not able to make it all the way out, we wanted to make this video and share our special day with you.  We had a simple ceremony in the beautiful rocky mountains, and a causal reception at a local reservoir.  Most importantly, we wanted to thank you for the extremely generous wedding gift that we are using to build our new lives together.  Thank you also for thinking about us on this day.  We hope that sometime soon we can make it out to visit.  </p>
          <p> Love Always, </p>
          <p> Matthew and Heidi </p>
        </Card>

        </Card>

      <footer>
        <p className="foot">
          Official Thank You website for all who shared in celebration, either in person, or in spirit!!
        </p>
      </footer>
      </div>
      </div>

    );
  }
});

export default Hayashida;
