import React, { Component, PropTypes } from 'react';
import { isSameDay, presets, GetDateNow, StartDate_Big_EndDate, D1_D1_Eq_moment, GetDateYMD_moment } from '../core/core_Function.jsx';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import { G2, Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape, Facet, Util } from "bizcharts";
import DataSet from "@antv/data-set";

import W_main from './headerMain/w_main.jsx';
import 'moment/locale/ru';
import { DateRangePicker } from 'react-dates';


const _Debuge = false;

export default class HeaderCh_Main extends Component {
   constructor(props) {
      super(props);
     
   }
   updateData = ({ startDate, endDate }) => {
      let NumberChart = 0;
      this.props.updateData({ startDate, endDate, NumberChart });
   }
   render() {
      return (
         <W_main
            header='Общие показатели за период'
            Rss={this.props.Rss}            
            startDate={this.props.S_Date_Head}
            endDate={this.props.E_Date_Head}
            updateData={this.updateData}
         />
      );
   }
}
