import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';

import W_main_Icon from './mainN1/w_main_Icon.jsx';

import moment from 'moment';

export default class Dolay_IncReg extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      let _header = 'Доля инцидентов по регионам';
      return (
         <W_main_Icon
            header={_header}
            w_Width={this.props.w_Width}
//            startDate={this.props.dateStart}
//            endDate={this.props.dateStop}
            regions={this.props.regions}
            updateData={this.props.updateData}
            history={this.props.history}
         />
      );
   }
}