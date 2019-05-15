import React, { Component, PropTypes } from 'react';
import { GetDateNow, dateStart, dateStop, GetDatFromColChart, get_Date } from '../core/core_Function.jsx';

import W_main_table from './firstChart/w_main_table.jsx';
import moment from 'moment';

export default class First_Chart_Table extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      let date_Start = dateStart;
      let date_Stop = dateStop;
      let dataTable = get_Date();
      let dataCol_Char1 = GetDatFromColChart(dataTable);
      

      return (
         <W_main_table
            header='Недоступность касс за период на АЗК'
            StartDate={date_Start}
            StopDate={date_Stop}
            Data={dataTable}
            DataChart={dataCol_Char1}
            w_Width={this.props.w_Width}
            startDate={moment().add(-3, 'month')}
            endDate={moment()}
         />
      );
   }
}
