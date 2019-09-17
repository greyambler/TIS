import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';

import W_head from '../controls/w_head_link.jsx';

//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import { _startPast_Quarter, _endPast_Quarter, Rss, RssIncident, Rss_Settings, Rss_Regions } from '../../core/core_Function.jsx';



import moment from 'moment';

const _Debuge = true;

export default class w_chartDolay extends Component {
   constructor(props) {
      super(props);
      this.ClickRegion = this.ClickRegion.bind(this);
      this.state = {
         W_Width: this.props.w_Width,
         Data: this.props.Regions_Inc,
      }
   }

   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width });
      }
      if (this.props.Regions_Inc != prevProps.Regions_Inc) {
         this.setState({ Data: this.props.Regions_Inc });
      }
   }
   ClickRegion(v) {
      try {
         let endDate = moment();
         let startDate = moment().subtract(364, 'day');
         let NumberChart = 364;
         this.props.updateData({ startDate, endDate, NumberChart }, this.props.history.push('/Main_N&' + v.data._origin.id));
         /*
         //alert(v.data._origin.name + " " + v.data._origin.id);
         //window.location.href = '/Main_N' + '&' + v.data._origin.id;

         let dateEnd = moment().subtract(364, 'day').local('ru').format('YYYY/MM/DD');
         let dateStart = moment().local('ru').format('YYYY/MM/DD');

        // window.location.href = '/Main_N&' + v.data._origin.id + "&" + dateEnd + "&" + dateStart;
         */
      } catch (error) {
      }
   }



   render() {

      /*
     const data = [
        { name: 'Москва', incidents: 14, id: 77 },
        { name: 'Смоленск', incidents: 15, id: 75 },
        { name: 'Башнефть', incidents: 11, id: 74 },
        { name: 'Пенза', incidents: 10, id: 73 },
        { name: 'Ростов', incidents: 17, id: 71 }
     ];
    */
      if (this.state.Data != null) {
         const data = this.state.Data;
         const cols = {
            incident: {
               min: 0
            }
         };
         const td_Width = {
            width: '50%'
         }
         let _H = 365;//window.innerHeight;
         let _H_px = _H - 100;

         let AhrefBack = '/Main_N';
         let StyleHead = {
            textAlign: "center",
            color: "black",
            fontSize: '12px',
         }

         const seaTheme = {
            animate: true,
            colors: {},
            shapes: {},
         };
         //BizCharts.setTheme(seaTheme);

         return (
            <table>
               <tbody>
                  <tr>
                     <td >
                        <Chart
                           height={_H}
                           width={this.state.W_Width}
                           data={data}
                           padding="auto"
                           forceFit
                           //theme='seaTheme'

                           //OnClick={() => this.props.history.push('/Main_N')}
                           onClick={ev => { this.ClickRegion(ev) }}
                        >
                           <Coord type="polar" />
                           <Tooltip />

                           <Legend
                              position="right"
                              offsetY={_H / -2}
                              offsetX={0}
                           />

                           <Geom
                              type="interval"
                              color="name"
                              position="name*incidents"
                              style={{
                                 lineWidth: 1,
                                 stroke: "#fff"
                              }}
                           />
                        </Chart>
                     </td>
                  </tr>
               </tbody>
            </table>
         );
      } else {
         return <br />
      }
   }
}