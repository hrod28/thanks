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

const Chad = React.createClass({


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
          <p> Chad </p>
          <p> We love you!  We appreciate the positive, shining light you project everyday and want to thank you for taking part in our celebration.  It was lots of fun, thanks for helping to make it great. </p>
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

export default Chad;
