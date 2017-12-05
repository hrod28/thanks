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

const Andrew = React.createClass({


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
          <p> Andrew and Christine </p>
          <p> We would like to thank you so much for making the trip out to our wedding.  It was great to see you both again, and it was great to meet you (from Heidi).  We had a great time at the wedding and also visiting all of those many breweries we made it to (wink, wink)!  Thank you for the wedding gift and congratulations.  Keep in touch and hope to see you both soon. </p>
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

export default Andrew;
