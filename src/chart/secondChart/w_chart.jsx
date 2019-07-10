import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';

import DataSet from "@antv/data-set";

import {
   get_Date_Filter, get_Date, GetDatFromColChart_month,
   GetDatFromColChart, GetDatFromErrorEqv, GetDatFromErrorEqv_TEST
}
   from '../../core/core_Function.jsx';

/*

{this.props.isLegend &&

                     <td width='120px' className="td_C_Chart">
                        <W_choos updateType={this.updateType}
                           typeChart={this.props.typeChart} NeedCode={this.props.NeedCode} />
                        <W_choosed filterCurent={this.props.filterCurent}
                           deleteFilet={this.props.deleteFilet}
                        />
                     </td>
                  }

*/





/* OLD SAVE*/
const _Debuge = false;

export default class w_chart extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width / 2 - 25,
      }
   }

   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width / 2 - 25 });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width / 2 - 25 });
      }
   }

   render() {
      if (_Debuge) {

         const data = [
            {
               month: "Янв.",
               ТРК: 7.0,
               ФР: 7.0,
               ТУ: 23.9
            },
            {
               month: "Фев.",
               ТРК: 3.0,
               ФР: 6.9,
               ТУ: 24.2
            },
            {
               month: "Мар.",
               ТРК: 4.0,
               ФР: 9.5,
               ТУ: 21.7
            },
            {
               month: "Апр.",
               ТРК: 7.0,
               ФР: 16.5,
               ТУ: 18.5
            },
            {
               month: "Май.",
               ТРК: 8.0,
               ФР: 22.4,
               ТУ: 15.9
            },
            {
               month: "Июн.",
               ТРК: 6.0,
               ФР: 17.5,
               ТУ: 18.2
            },
            {
               month: "Июл.",
               ТРК: 7.0,
               ФР: 12.2,
               ТУ: 19.0
            },
            {
               month: "Авг.",
               ТРК: 4.0,
               ФР: 17.5,
               ТУ: 17.6
            },
            {
               month: "Сен.",
               ТРК: 3.0,
               ФР: 21.3,
               ТУ: 14.2
            },
            {
               month: "Окт.",
               ТРК: 5.0,
               ФР: 22.3,
               ТУ: 10.3
            },
            {
               month: "Ноя.",
               ТРК: 7.0,
               ФР: 23.9,
               ТУ: 6.6
            },
            {
               month: "Дек.",
               ТРК: 3.0,
               ФР: 29.6,
               ТУ: 4.8
            }
         ];

         const ds = new DataSet();

         const dv = ds.createView().source(data);

         dv.transform({
            type: "fold",
            fields: ["ТРК", "ФР", "ТУ"],
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
            <td colSpan='2'>
               <center>
                  <Chart
                     width={this.state.W_Width}
                     height={200}
                     data={dv}
                     scale={cols}
                     forceFit>
                     <br /><br /><br />
                     <Legend />
                     <Axis name="month" />
                     <Axis
                        name="temperature"
                        label={{
                           formatter: val => `${val}`
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
         );

      } else {
         if (this.props.Data != null) {
            const cols = {
               month: {
                  range: [0, 1]
               }
            };

            return (
               <td colSpan='2'>
                  <center>
                     <Chart
                        width={this.state.W_Width}
                        height={200}
                        data={this.props.Data}
                        scale={cols}
                        forceFit>
                        <br /><br /><br />
                        <Legend />
                        <Axis name="month" />
                        <Axis
                           name="value"
                           label={{
                              formatter: val => `${val}`
                           }}
                        />
                        <Tooltip
                           crosshairs={{
                              type: "y"
                           }}
                        />
                        <Geom
                           type="line"
                           position="month*value"
                           size={2}
                           color={"equip"}
                           shape={"smooth"}
                        />
                        <Geom
                           type="point"
                           position="month*value"
                           size={4}
                           shape={"circle"}
                           color={"equip"}
                           style={{
                              stroke: "#fff",
                              lineWidth: 1
                           }}
                        />
                     </Chart>
                  </center>
               </td>
            );
         } else {
            return <br />
         }
      }
   }
}
