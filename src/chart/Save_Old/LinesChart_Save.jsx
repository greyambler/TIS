import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';

import {
   G2,
   Chart,
   Geom,
   Axis,
   Tooltip,
   Coord,
   Label,
   Legend,
   View,
   Guide,
   Shape,
   Facet,
   Util
} from "bizcharts";

import DataSet from "@antv/data-set";


class LinesChart_Save extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width / 2 - 25,
      }
   }
   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width / 2 - 25 });
      }
   }

   render() {
      const data = [
         {
            month: "Jan",
            ТРК: 7.0,
            ТСО: 23.9
         },
         {
            month: "Feb",
            ТРК: 6.9,
            ТСО: 24.2
         },
         {
            month: "Mar",
            ТРК: 9.5,
            ТСО: 21.7
         },
         {
            month: "Apr",
            ТРК: 16.5,
            ТСО: 18.5
         },
         {
            month: "May",
            ТРК: 22.4,
            ТСО: 15.9
         },
         {
            month: "Jun",
            ТРК: 17.5,
            ТСО: 18.2
         },
         {
            month: "Jul",
            ТРК: 12.2,
            ТСО: 19.0
         },
         {
            month: "Aug",
            ТРК: 17.5,
            ТСО: 17.6
         },
         {
            month: "Sep",
            ТРК: 21.3,
            ТСО: 14.2
         },
         {
            month: "Oct",
            ТРК: 22.3,
            ТСО: 10.3
         },
         {
            month: "Nov",
            ТРК: 23.9,
            ТСО: 6.6
         },
         {
            month: "Dec",
            ТРК: 29.6,
            ТСО: 4.8
         }
      ];
      const ds = new DataSet();
      const dv = ds.createView().source(data);
      dv.transform({
         type: "fold",
         fields: ["ТРК", "ТСО"],
         key: "city",
         value: "temperature" // value
      });
      console.log(dv);
      const cols = {
         month: {
            range: [0, 1]
         }
      };
      return (
         <div>
            <table>
               <tbody>
                  <tr>
                     <td>
                        <center>
                           <Chart
                              width={this.state.W_Width}
                              height={200}
                              data={dv} scale={cols}
                              forceFit
                           >
                              <Legend />
                              <Axis name="month" />
                              <Axis
                                 name="temperature"
                                 label={{
                                    formatter: val => `${val}°C`
                                 }}
                              />
                              <Tooltip
                                 crosshairs={{
                                    type: "y"
                                 }}
                              />
                              <Geom
                                 type="line"
                                 position="month*temperature"
                                 size={2}
                                 color={"city"}
                              />
                              <Geom
                                 type="point"
                                 position="month*temperature"
                                 size={4}
                                 shape={"circle"}
                                 color={"city"}
                                 style={{
                                    stroke: "#fff",
                                    lineWidth: 1
                                 }}
                              />
                           </Chart>
                        </center>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <center>
                           Доступность периферийного оборудования
                           (потери за последний месяц по всем регионам)
                     </center>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}

export default LinesChart_Save;
