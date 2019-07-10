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

const _Debuge = false;

export default class First_Chart extends React.Component {
   constructor(props) {
      super(props);
      let _header = 'Недоступность касс за период по АЗК';
      switch (this.props.NeedCode) {
         case '191':
            _header = 'Отклонение от нормы за период по зависшим транзакциям на ТРК (191)';
            if (_Debuge)
               _header += " - First_Chart";
            break;
         case '122':
            _header = 'Недоступность касс за период по АЗК (122)';
            if (_Debuge)
               _header += " - First_Chart";
            break;
         case '33':
            _header = 'Событие аннуляции чека (33)';
            if (_Debuge)
               _header += " - First_Chart";
            break;
         default:
            _header = 'Недоступность касс за период по АЗК (all)';
            if (_Debuge)
               _header += " - First_Chart";
            break;
      }
      this.state = {
         NeedCode: this.props.NeedCode,
         header: _header,
      }
   }
   updateData = ({ startDate, endDate }) => {
      let NumberChart = 1;
      switch (this.state.NeedCode) {
         case '191':
            NumberChart = 11;
            break;
         case '122':
            NumberChart = 12;
            break;
         case '33':
            NumberChart = 14;
            break;
         default:
            NumberChart = 1;
            break;
      }
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
