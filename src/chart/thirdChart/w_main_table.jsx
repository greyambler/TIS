import React, { Component, PropTypes } from 'react';
import W_head from '../controls/w_head.jsx';
import W_headDate from '../controls/w_headDate.jsx';

import W_headFilter from './w_headFilter.jsx';

import W_chart from './w_chart.jsx';
import W_table from './w_table.jsx';

import { Link } from "react-router-dom";
import moment from 'moment';
import { get_Date_Filter, get_Date, GetDatFromColChart } from '../../core/core_Function.jsx';

export default class w_main_table extends Component {
   constructor(props) {
      super(props);
      let _dataTable = get_Date_Filter(get_Date(), this.props.startDate, this.props.endDate);
      this.state = {
         startDate: this.props.startDate,
         endDate: this.props.endDate,
         dataTable: _dataTable,
         dataCol_Char1: GetDatFromColChart(_dataTable),
      }
   }
   updateData = ({ startDate, endDate }) => {
      this.setState({ startDate, endDate });

      if (startDate != null && endDate != null) {
         let _dataTable = get_Date_Filter(get_Date(), startDate, endDate);
         this.setState({ dataTable: _dataTable });
         this.setState({ dataCol_Char1: GetDatFromColChart(_dataTable) });
      }
      if (startDate == null) {
         this.setState({ startDate: moment() });
      }
      if (endDate == null) {
         this.setState({ endDate: moment() });
      }
   }

   render() {

      //let dataCol_Char1 = GetDatFromColChart( get_Date());


      return (
         <table id='table_main' name='table_main' >
            <tbody>
               <tr>
                  <W_head header={this.props.header} />
               </tr>

               <tr>
                  <W_headDate updateData={this.updateData}
                     startDate={this.state.startDate} endDate={this.state.endDate}
                     isDisable={false}
                  />
               </tr>

               <hr /><hr /><br />

               <tr>
                  <W_chart DataChart={this.state.dataCol_Char1} w_Width={this.props.w_Width} />
               </tr>
               <hr /><hr />
               <tr>
                  <W_table Data={this.state.dataTable} w_Width={this.props.w_Width}
                  />
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