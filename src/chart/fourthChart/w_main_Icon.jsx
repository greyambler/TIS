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
   }
   updateData = ({ startDate, endDate }) => {
      this.props.updateData({ startDate, endDate });
   }
   render() {
      let _dataTable = get_Date_Filter(get_Date(), this.props.startDate, this.props.endDate);
      let dataCol_Char1 = GetDatFromColChart(_dataTable);
      return (
         <table>
            <tbody>
               <tr>
                  <th rowSpan='3'>
                     <Link to="/ChFourth">
                        <img src={'../images/JDownloader.ico'} className='ICO_Link'/>
                     </Link>
                  </th>
               </tr>
               <tr>
                  <W_head header={this.props.header} />
               </tr>
               <tr>
                  <W_headDate updateData={this.updateData}
                     startDate={this.props.startDate} endDate={this.props.endDate} isDisable={false} />
               </tr>
               <tr>
                  <W_chart DataChart={dataCol_Char1} w_Width={this.props.w_Width} />
               </tr>
            </tbody>
         </table>
      );
   }
}
