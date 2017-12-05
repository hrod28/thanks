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

const Lindsay = React.createClass({


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
          <p> Lindsay, </p>
          <p> We had so much fun at the wedding and reception.  It was go good to see you and share in the celebration with you and Jaime </p>
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

export default Lindsay;
