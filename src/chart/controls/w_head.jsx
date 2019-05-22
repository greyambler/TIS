import React, { Component, PropTypes } from 'react';
import { throws } from 'assert';

export default class w_head extends Component {

   render() {
      let StyleHead = {
         textAlign: "center",
      }
      if (this.props.color == 'red') {
         StyleHead = {
            textAlign: "center",
            color: "red",
         }
      }
      switch (this.props.equal) {
         case 'left':
            {
               StyleHead = {
                  textAlign: "left",
                  paddingLeft: "10px",
               }
               if (this.props.color == 'red') {
                  StyleHead = {
                     textAlign: "left",
                     paddingLeft: "10px",
                     color: "red",
                  }
               }

               break;
            }
         case 'right':
            {
               StyleHead = {
                  textAlign: "right",
                  paddingRight: "10px",
               }
               if (this.props.color == 'red') {
                  StyleHead = {
                     textAlign: "right",
                     paddingRight: "10px",
                     color: "red",
                  }
               }
               break;
            }
         default: break;
      }

      return (
         <th style={StyleHead}>
            <legend>{this.props.header}</legend>
         </th>
      );
   }
}