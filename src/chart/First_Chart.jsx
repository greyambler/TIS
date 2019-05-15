import React, { Component, PropTypes } from 'react';
//import { GetDateNow, dateStart, dateStop, GetDatFromColChart, get_Date } from '../core/core_Function.jsx';
import { get_Date, GetDatFromColChart } from '../core/core_Function.jsx';

import W_main_Icon from './firstChart/w_main_Icon.jsx';
import W_main_table from './firstChart/w_main_table.jsx';
import moment from 'moment';
/*
<ColumnChart Data={dataCol_Char1}
   dateStart={dateStart} dateStop={dateStop}
   w_Width={this.state.W_Width} />
*/

export default class First_Chart extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      let S_tDate = this.props.dateStart; //dateStart;
      let E_Date = this.props.dateStop;   //dateStop;
      let dataCol_Char1 = this.props.Data;   //GetDatFromColChart(get_Date());


      if (!this.props.IsTable) {
         
         return (
            <W_main_Icon
               header='Недоступность касс за период на АЗК'
               DataChart={dataCol_Char1}
               w_Width={this.props.w_Width}
               startDate={S_tDate}
               endDate={E_Date}
            />
         );

      } else {

         let dataTable = get_Date();
         dataCol_Char1 = GetDatFromColChart(dataTable);
         
         return (
            <W_main_table
               header='Недоступность касс за период на АЗК'
               Data={dataTable}
               DataChart={dataCol_Char1}
               w_Width={this.props.w_Width}
               startDate={S_tDate}
               endDate={E_Date}
            />
         );
         
      }
   }
}
