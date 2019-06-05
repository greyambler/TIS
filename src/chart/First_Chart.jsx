import React, { Component, PropTypes } from 'react';
import { get_Date_Filter, get_Date, GetDatFromColChart, Get_RSS } from '../core/core_Function.jsx';

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
         NeedCode: this.props.NeedCode,
         header: (this.props.NeedCode == '191')
            ? 'Зависшие транзакции' : 'Недоступность касс за период по АЗК',
      }
   }
   updateData = ({ startDate, endDate }) => {
      let NumberChart = this.state.NeedCode == '191' ? 11 : 1;
      this.props.updateData({ startDate, endDate, NumberChart });
   }

   render() {
      let rss = Get_RSS(this.props.RssIncident, this.props.dateStart, this.props.dateStop, this.props.NeedCode);

      if (!this.props.IsTable) {
         return (
            <W_main_Icon
               header={this.state.header}//'Недоступность касс за период по АЗК'
               w_Width={this.props.w_Width}
               startDate={this.props.dateStart}
               endDate={this.props.dateStop}
               updateData={this.updateData}
               RssDate={rss}
               NeedCode={this.state.NeedCode}
            />
         );
      } else {
         return (
            <W_main_table
               header={this.state.header}//'Недоступность касс за период по АЗК'
               w_Width={this.props.w_Width}
               startDate={this.props.dateStart}
               endDate={this.props.dateStop}
               updateData={this.updateData}
               RssDate={rss}
               NeedCode={this.state.NeedCode}
            />
         );
      }
   }
}
