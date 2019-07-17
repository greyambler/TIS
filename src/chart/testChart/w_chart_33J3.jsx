import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';

import DataSet from '@antv/data-set';

import { max } from 'moment';

const _Debuge = false;

export default class w_chart extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width,
      }
   }

   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width });
      }
   }

   render() {
      const data = [
         {
            name: "ФР",
            "Jan.": 18.9,
            "Feb.": 28.8,
            "Mar.": 39.3,
            "Apr.": 81.4,
            "May.": 47,
            "Jun.": 20.3,
            "Jul.": 24,
            "Aug.": 35.6
         },
         {
            name: "ТУ",
            "Jan.": 12.4,
            "Feb.": 23.2,
            "Mar.": 34.5,
            "Apr.": 99.7,
            "May.": 52.6,
            "Jun.": 35.5,
            "Jul.": 37.4,
            "Aug.": 42.4
         },
         {
            name: "norm",
            "Jan.": 15.9,
            "Feb.": 15.8,
            "Mar.": 15.3,
            "Apr.": 15.4,
            "May.": 15,
            "Jun.": 15.3,
            "Jul.": 15,
            "Aug.": 15.6
         },

      ];
      const ds = new DataSet();
      const dv = ds.createView().source(data);
      dv.transform({
         type: "fold",
         fields: ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug."],
         // Развернуть набор полей
         key: "month",        // key поля
         value: "B_Month" // value поля
      });

      

      return (
         <div>
            <Chart
               padding="auto"
               forceFit
               width={this.state.W_Width / 2 - 50}
               height={200}
               data={dv}
               
            >
               <Axis name="month" />
               <Axis name="B_Month" />
               <Legend />
               <Tooltip
                  crosshairs={{
                     type: "y"
                  }}
               />
               <Geom
                  type="interval"
                  position="month*B_Month"
                  color={"name"}
                  adjust={[
                     {
                        type: "dodge",
                        marginRatio: 1 / 32
                     }
                  ]}



               />

            </Chart>
         </div>
      );
   }

}



