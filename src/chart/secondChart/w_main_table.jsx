import React, { Component, PropTypes } from 'react';
import W_head from '../controls/w_head.jsx';
import W_headDate from '../controls/w_headDate.jsx';

//import W_headFilter from './w_headFilter.jsx';
//import moment from 'moment';

import W_chart from './w_chart.jsx';
import W_table from './w_table.jsx';
import { Link } from "react-router-dom";
import { get_Date_Filter, get_Date, GetDatFromColChart } from '../../core/core_Function.jsx';

export default class w_main_table extends Component {
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
         <div>
            <table id='table_main' name='table_main' >
               <tbody>
                  <tr>
                     <W_head header={this.props.header} />
                     <th rowSpan='3' width='65px'>
                        <Link to="/">
                           <img src={'../images/Library.ico'} className='ICO_Link'/>
                        </Link>
                     </th>
                  </tr>
                  <tr>
                     <W_headDate updateData={this.updateData}
                        startDate={this.props.startDate} endDate={this.props.endDate}
                        isDisable={false}
                     />
                  </tr>
               </tbody>
            </table>

            <hr /><hr /><br />

            <table>
               <tbody>
                  <tr>
                     <W_chart DataChart={dataCol_Char1} w_Width={this.props.w_Width} />
                  </tr>
               </tbody>
            </table>
            <hr /><hr />
            <table>
               <tbody>
                  <tr>
                     <td>
                        <W_table Data={_dataTable} w_Width={this.props.w_Width} />
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}
