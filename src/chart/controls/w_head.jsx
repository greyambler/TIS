import React, { Component, PropTypes } from 'react';
import { throws } from 'assert';

export default class w_head extends Component {

   render() {
      let _className = 'Head_Center';
      switch (this.props.equal) {
         case 'left': _className = 'Head_Left'; break;
         case 'right': _className = 'Head_Right'; break;
         default: _className = 'Head_Center'; break;
      }
      if (this.props.color == 'red') {
         _className = 'T_Error';
      }

      return (
         < th className={_className}>
            <legend>{this.props.header}</legend>
         </th >
      );
   }
}