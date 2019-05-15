import React, { Component, PropTypes } from 'react';

export default class w_head extends Component {
   render() {
      return (
         <th>
            <center>{this.props.header}</center>
         </th>
      );
   }
}