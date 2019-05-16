import React, { Component, PropTypes } from 'react';
//import { GetDateNow, dateStart, dateStop, GetDatFromColChart, get_Date } from '../core/core_Function.jsx';
import { get_Date_Filter, get_Date, GetDatFromColChart } from '../core/core_Function.jsx';

import W_main_Icon from './firstChart/w_main_Icon.jsx';
import W_main_table from './firstChart/w_main_table.jsx';
import moment from 'moment';
/*
<ColumnChart Data={dataCol_Char1}
   dateStart={dateStart} dateStop={dateStop}
   w_Width={this.state.W_Width} />
*/

/*// Правильно :)

this.setState((prevState, props) => ({
   temperature: prevState.temperature + props.delta
 }));
*/

export default class First_Chart extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         startDate: this.props.dateStart,
         endDate: this.props.dateStop,
      };
   }
   updateData = ({ startDate, endDate }) => {
      this.props.updateData({ startDate, endDate });
   }
   componentDidUpdate(prevProps) {
      if (this.props.dateStart != prevProps.dateStart) {
         this.setState({ startDate: this.props.dateStart });
      }
      if (this.props.dateStop != prevProps.dateStop) {
         this.setState({ endDate: this.props.dateStop });
      }

   }
   render() {
      if (!this.props.IsTable) {
         return (
            <W_main_Icon
               header='Недоступность касс за период на АЗК'
               w_Width={this.props.w_Width}
               startDate={this.state.startDate}
               endDate={this.state.endDate}
               updateData={this.updateData}
            />
         );
      } else {
         return (
            <W_main_table
               header='Недоступность касс за период на АЗК'
               w_Width={this.props.w_Width}
               startDate={this.state.startDate}
               endDate={this.state.endDate}
               updateData={this.updateData}
            />
         );
      }
   }
}
