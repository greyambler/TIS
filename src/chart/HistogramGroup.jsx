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

class HistogramGroup extends React.Component {
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
            name: "Норма",
            "Янв.": 18.9,
            "Фев.": 28.8,
            "Мар.": 39.3,
            "Апр.": 81.4,
            "Май.": 47,
            "Июн.": 20.3,
            "Июл.": 24,
            "Авг.": 35.6
         },
         {
            name: "Факт",
            "Янв.": 12.4,
            "Фев.": 23.2,
            "Мар.": 34.5,
            "Апр.": 99.7,
            "Май.": 52.6,
            "Июн.": 35.5,
            "Июл.": 37.4,
            "Авг.": 42.4
         }
      ];
      const ds = new DataSet();
      const dv = ds.createView().source(data);
      dv.transform({
         type: "fold",
         fields: ["Янв.", "Фев.", "Мар.", "Апр.", "Май.", "Июн.", "Июл.", "Авг."],
         // 展开字段集
         key: "月份",
         // key字段
         value: "月均降雨量" // value字段
      });
      return (
         <table>
            <tbody>
               <tr>
                  <th>
                     <center>
                        Отклонение от нормы за период по зависшим транзакциям на ТРК
                  </center>
                  </th>
               </tr>
               <tr>
                     <td className="td_Date">
                        <center>{this.props.dataStart}  -  {this.props.dataStop}</center>
                     </td>
                  </tr>
               <tr>
                  <td>
                     <div>
                        <center>
                           <Chart
                              width={this.state.W_Width}
                              height={200}
                              data={dv}
                              forceFit
                           >
                              <Axis name="月份" />
                              <Axis name="月均降雨量" />
                              <Legend />
                              <Tooltip
                                 crosshairs={{
                                    type: "y"
                                 }}
                              />
                              <Geom
                                 type="interval"
                                 position="月份*月均降雨量"
                                 color={"name"}
                                 adjust={[
                                    {
                                       type: "dodge",
                                       marginRatio: 1 / 32
                                    }
                                 ]}
                              />
                           </Chart>
                        </center>
                     </div>
                  </td>
               </tr>

            </tbody>
         </table>
      );
   }
}
export default HistogramGroup;
