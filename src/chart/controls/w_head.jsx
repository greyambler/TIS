import React, { Component, PropTypes } from 'react';
import { throws } from 'assert';

export default class w_head extends Component {

   render() {
      let StyleHead = {
         textAlign: "center",
         color: "black",
         fontSize: '16px',
      }
      if (this.props.color == 'red') {
         StyleHead = {
            textAlign: "center",
            color: "red",
            fontSize: '16px',
         }
      }
      switch (this.props.equal) {
         case 'left':
            {
               StyleHead = {
                  textAlign: "left",
                  paddingLeft: "10px",
                  fontSize: '16px',
               }
               if (this.props.color == 'red') {
                  StyleHead = {
                     textAlign: "left",
                     paddingLeft: "10px",
                     color: "red",
                     fontSize: '16px',
                  }
               }

               break;
            }
         case 'right':
            {
               StyleHead = {
                  textAlign: "right",
                  paddingRight: "10px",
                  fontSize: '16px',
               }
               if (this.props.color == 'red') {
                  StyleHead = {
                     textAlign: "right",
                     paddingRight: "10px",
                     color: "red",
                     fontSize: '16px',
                  }
               }
               break;
            }
         default: break;
      }

      return (
         <th style={StyleHead}>

            {this.props.header}

         </th>
      );
   }
}