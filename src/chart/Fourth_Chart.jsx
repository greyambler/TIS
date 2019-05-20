import React, { Component, PropTypes } from 'react';
import { get_Date_Filter, get_Date, GetDatFromColChart } from '../core/core_Function.jsx';

import W_main_Icon from './fourthChart/w_main_Icon.jsx';
import W_main_table from './fourthChart/w_main_table.jsx';
import moment from 'moment';

export default class Fourth_Chart extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         startDate: this.props.dateStart,
         endDate: this.props.dateStop,
      };
   }
   updateData = ({ startDate, endDate }) => {
      let NumberChart = 4;
      this.props.updateData({ startDate, endDate, NumberChart });
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
               header='Недоступность СВН (количество событий) ТОП-5 ПНПО'
               w_Width={this.props.w_Width}
               startDate={this.state.startDate}
               endDate={this.state.endDate}
               updateData={this.updateData}
            />
         );
      } else {
         return (
            <W_main_table
               header='Недоступность СВН (количество событий) ТОП-5 ПНПО'
               w_Width={this.props.w_Width}
               startDate={this.state.startDate}
               endDate={this.state.endDate}
               updateData={this.updateData}
            />
         );
      }
   }
}