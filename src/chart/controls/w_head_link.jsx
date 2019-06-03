import React, { Component, PropTypes } from 'react';
import { Link } from "react-router-dom";
import { throws } from 'assert';

export default class w_head_link extends Component {

   render() {
      let StyleHead = {
         textAlign: "center",
         color: "black",
         fontSize: '12px',
      }
      if (this.props.color == 'red') {
         StyleHead = {
            textAlign: "center",
            color: "red",
            fontSize: '12px',
         }
      }
      switch (this.props.equal) {
         case 'left':
            {
               StyleHead = {
                  textAlign: "left",
                  paddingLeft: "10px",
                  fontSize: '12px',
                  color: "black",
               }
               if (this.props.color == 'red') {
                  StyleHead = {
                     textAlign: "left",
                     paddingLeft: "10px",
                     color: "red",
                     fontSize: '12px',
                  }
               }

               break;
            }
         case 'right':
            {
               StyleHead = {
                  textAlign: "right",
                  paddingRight: "10px",
                  fontSize: '12px',
                  color: "black",
               }
               if (this.props.color == 'red') {
                  StyleHead = {
                     textAlign: "right",
                     paddingRight: "10px",
                     color: "red",
                     fontSize: '12px',
                  }
               }
               break;
            }
         default: break;
      }

      return (
         <th style={StyleHead}>
            <Link to={this.props.AhrefBack} style={StyleHead}>
               {this.props.header}
            </Link>
         </th>
      );
   }
}
/*
            <Link to="/ChFirst" style={StyleHead}>
               {this.props.header}
            </Link>


*/