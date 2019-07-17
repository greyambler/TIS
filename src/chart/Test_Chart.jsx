import React, { Component, PropTypes } from 'react';
import { get_Date_Filter, get_Date, GetDatFromColChart, Get_RSS } from '../core/core_Function.jsx';

import W_main_Icon from './testChart/w_main_Icon.jsx';
import W_main_table from './testChart/w_main_table.jsx';
import moment from 'moment';

export default class Test_Chart extends React.Component {
   constructor(props) {
      super(props);
      let _header='Событие аннуляции чека (33)';
      this.state = {
         NeedCode: this.props.NeedCode,
         header: _header,
      }
   }
   updateData = ({ startDate, endDate}) => {
      let NumberChart = 10;
      this.props.updateData({ startDate, endDate, NumberChart});
   }
   render() { 
      let rss = Get_RSS(this.props.RssIncident, this.props.dateStart, this.props.dateStop);

      if (!this.props.IsTable) {
         return (
            <W_main_Icon
               header='Событие аннуляции чека (33)'
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
               header='Событие аннуляции чека (33)'
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
