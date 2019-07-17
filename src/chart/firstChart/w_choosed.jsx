import React, { Component, PropTypes } from 'react';
import { Delete_Item_Filter } from '../../core/core_Function.jsx';

export default class w_choosed extends Component {
   constructor(props) {
      super(props);
      this.Un_Check = this.Un_Check.bind(this);
   }
   Un_Check(event) {
      this.props.deleteFilet(event.target.value);
   }
   render() {
      return (
         <div className="contrRigth_ul">
            <center>Фильтры</center>
            <ol className="contrRigth_ul" >
               {this.props.filterCurent.map((text) => {
                  return <li><input type="checkbox" name="option2" checked="true" value={text}
                     readOnly
                     onClick={this.Un_Check}
                  />{text}</li>;
               })}
            </ol>
         </div>
      );
   }
}
