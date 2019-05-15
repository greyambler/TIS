import React, { Component, PropTypes } from 'react';
import W_head from './w_head.jsx';
import W_headDate from './w_headDate.jsx';

import W_headFilter from './w_headFilter.jsx';

import W_chart from './w_chart.jsx';
import W_table from './w_table.jsx';

import { Link } from "react-router-dom";
import moment from 'moment';

export default class w_main_table extends Component {
   constructor(props) {
      super(props);
      this.state = {
         startDate: this.props.startDate,
         endDate: this.props.endDate,
      }
   }
   updateData = ({ startDate, endDate }) => {
      this.setState({ startDate, endDate });
      if(startDate == null){
         this.setState({ startDate: moment()});
      }
      if(endDate == null){
         this.setState({ endDate: moment()});
      }
   }

   render() {
      return (
         <table id='table_main' name='table_main' >
            <tbody>
               <tr>
                  <W_head header={this.props.header}  />
               </tr>
               
               <tr>
                  <W_headDate updateData={this.updateData}
                     startDate={this.state.startDate} endDate={this.state.endDate}
                     isDisable={false}
                  />
               </tr>

               <hr /><hr /><br />

               <tr>
                  <W_chart DataChart={this.props.DataChart} w_Width={this.props.w_Width} />
               </tr>
               <hr /><hr />
               <tr>
                  <W_table Data={this.props.Data} w_Width={this.props.w_Width} />
               </tr>
            </tbody>
         </table>
      );
   }
}


/*



               <td className="td_Date">
                  <center>
                     {this.state.startDate.format("DD/MM/YYYY")}  -  {this.state.endDate.format("DD/MM/YYYY")}
                  </center>
               </td>


//StartDate={this.state.startDate} StopDate={this.state.endDate}


*/