import React, { Component, PropTypes } from 'react';
import { get_Date_Filter, get_Date, GetDatFromColChart , Get_RSS } from '../core/core_Function.jsx';

import W_main_Table from './settingsTabl/w_main_table.jsx';


import moment from 'moment';

const _Debuge = false;

export default class Settings_Tabl extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      let rss = this.props.Rss;//Get_RSS(this.props.RssIncident, this.props.dateStart, this.props.dateStop, this.props.NeedCode);
      return (
         <W_main_Table
            header='Настройки'
            w_Width={this.props.w_Width}

            Rss={rss}
         />
      );
   }
}
