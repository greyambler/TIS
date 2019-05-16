import React, { Component, PropTypes } from 'react';
import W_head from '../controls/w_head.jsx';
import W_headDate from '../controls/w_headDate.jsx';
import W_chart from './w_chart.jsx';
import { Link } from "react-router-dom";
import moment from 'moment';
import { get_Date_Filter, get_Date, GetDatFromColChart } from '../../core/core_Function.jsx';

export default class w_main_Icon extends Component {
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
      return (
         <table>
            <tbody>
               <th rowSpan='3'>
                  <Link to="/ChTDRP">
                     <img src={'../images/JDownloader.ico'} width='30' />
                  </Link>
               </th>
               <tr>
                  <W_head header={this.props.header} />
               </tr>
               <tr>
                  <W_headDate updateData={this.updateData}
                     startDate={this.props.startDate} endDate={this.props.endDate} isDisable={true} />
               </tr>
               <tr>
                  <W_chart DataChart={this.state.dataCol_Char1} w_Width={this.props.w_Width} />
               </tr>
            </tbody>
         </table>
      );
   }
}
//StartDate={this.props.StartDate} StopDate={this.props.StopDate}