import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';
import DataSet from "@antv/data-set";

export default class w_chart extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width / 2 - 25,
         Data: this.props.DataChart,
      }
   }

   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width / 2 - 25 });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width / 2 - 25 });
      }
      if (this.props.DataChart != prevProps.DataChart) {
         this.setState({ Data: this.props.DataChart });
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
         <td colSpan='2'>
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
         </td>
      );
   }
}