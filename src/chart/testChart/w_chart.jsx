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

      const data = [
         {
            month: "01/2019",
            equip: "ФР",
            value: 37.6,
            E_33: 1
         },
         {
            month: "02/2019",
            equip: "ФР",
            value: 32.2,
            E_33: 4
         },
         {
            month: "03/2019",
            equip: "ФР",
            value: 29.7,
            E_33: 38
         },
         {
            month: "04/2019",
            equip: "ФР",
            value: 23.5,
            E_33: 3
         },
         {
            month: "05/2019",
            equip: "ФР",
            value: 21.4,
            E_33: 24
         },
         {
            month: "06/2019",
            equip: "ФР",
            value: 18.5,
            E_33: 20
         },
         {
            month: "07/2019",
            equip: "ФР",
            value: 16.2,
            E_33: 18
         },
         {
            month: "08/2019",
            equip: "ФР",
            value: 14.5,
            E_33: 12
         },
         {
            month: "09/2019",
            equip: "ФР",
            value: 11.3,
            E_33: 10
         },
         {
            month: "10/2019",
            equip: "ФР",
            value: 10.3,
            E_33: 10
         },
         {
            month: "11/2019",
            equip: "ФР",
            value: 10.9,
            E_33: 9
         },
         {
            month: "121/2019",
            equip: "ФР",
            value: 9.6,
            E_33: 10
         },


         /**** */

         {
            month: "01/2019",
            equip: "ТУ",
            value: 32.6,
            E_33: 1
         },
         {
            month: "02/2019",
            equip: "ТУ",
            value: 30.2,
            E_33: 4
         },
         {
            month: "03/2019",
            equip: "ТУ",
            value: 25.7,
            E_33: 38
         },
         {
            month: "04/2019",
            equip: "ТУ",
            value: 20.5,
            E_33: 3
         },
         {
            month: "05/2019",
            equip: "ТУ",
            value: 20.4,
            E_33: 24
         },
         {
            month: "06/2019",
            equip: "ТУ",
            value: 14.5,
            E_33: 20
         },
         {
            month: "07/2019",
            equip: "ТУ",
            value: 13.2,
            E_33: 18
         },
         {
            month: "08/2019",
            equip: "ТУ",
            value: 12.5,
            E_33: 12
         },
         {
            month: "09/2019",
            equip: "ТУ",
            value: 11.3,
            E_33: 10
         },
         {
            month: "10/2019",
            equip: "ТУ",
            value: 8.3,
            E_33: 10
         },
         {
            month: "11/2019",
            equip: "ТУ",
            value: 9.9,
            E_33: 9
         },
         {
            month: "121/2019",
            equip: "ТУ",
            value: 7.6,
            E_33: 10
         },


         /**** *
         {
            month: "01/2019",
            E_33: 1
         },
         {
            month: "02/2019",
            E_33: 4
         },
         {
            month: "03/2019",
            E_33: 38
         },
         {
            month: "04/2019",
            E_33: 3
         },
         {
            month: "05/2019",
            E_33: 24
         },
         {
            month: "06/2019",
            E_33: 20
         },
         {
            month: "07/2019",
            E_33: 18
         },
         {
            month: "08/2019",
            E_33: 12
         },
         {
            month: "09/2019",
            E_33: 10
         },
         {
            month: "10/2019",
            E_33: 10
         },
         {
            month: "11/2019",
            E_33: 9
         },
         {
            month: "121/2019",
            E_33: 10
         },

          n month: "121/2019",
          azs   equip: "ТУ",
          sales  value: 7.6,
          norm  E_33: 10
         */
      ];

      let VertMax = 1;
      for (const iterator of data) {
         if (VertMax < iterator.value) {
            VertMax = iterator.value;
         }
         if (VertMax < iterator.E_33) {
            VertMax = iterator.E_33;
         }
      }
      const cols = {
         sales: {
            alias: 'Событий',
            min: 0,
            //tickInterval: Math.ceil(VertMax / 4)
            max: Math.ceil(VertMax)
         },
         E_33: {
            alias: 'Событие 33',
            min: 0,
            max: Math.ceil(VertMax),
            x: 2
         }
      };
      return (
         <div>

            <Chart
               width={this.state.W_Width}
               height={200}
               data={data}
               scale={cols}
               forceFit>

               
               <center><span>По месяцам (тестовое представление!!!)</span></center>
               <Legend />
               <Axis name="month" />
               <Axis name="value"
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
                  type="interval"
                  position="month*value"
                  color={"equip"}
                  adjust={[
                     {
                        type: "dodge",
                        marginRatio: 1 / 32
                     }
                  ]}
               />


               <Geom
                  type="line"
                  position="month*E_33"
                  size={2}
                  color={"orange"}
                  
               />
               <Geom
                  type="point"
                  position="month*E_33"
                  size={4}
                  shape={"circle"}
                  color={"orange"}
                  style={{
                     stroke: "#fff",
                     lineWidth: 1
                  }}
               />
            </Chart>

         </div>
      );
   }
}

