import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';
/*
import {
   get_Date, Get_StartDate, Get_StopDate, GetDateNowDMY,
   GetDateNow, contains, GetDatFromColChart, dataStart, dataStop
} from '../../core/core_Function.jsx';



import DataSet from "@antv/data-set";
*/
const _Debuge = true;

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
      /* 
   const data = [
      {
         date_month: "1951 年",
         sales: 38
      },
      {
         date_month: "1952 年",
         sales: 52
      },
      {
         date_month: "1956 年",
         sales: 61
      },
      {
         date_month: "1957 年",
         sales: 145
      },
      {
         date_month: "1958 年",
         sales: 48
      },
      {
         date_month: "1959 年",
         sales: 38
      },
      {
         date_month: "1960 年",
         sales: 38
      },
      {
         date_month: "1962 年",
         sales: 38
      }
   ];
*/
      const data = this.props.DataChart;
      let VertMax = 1;//1000
      for (const iterator of this.props.DataChart) {
         if (VertMax < iterator.sales) {
            VertMax = iterator.sales;
         }
      }
      /*
            const cols = {
               sales: {
                  tickInterval:Math.ceil(VertMax/5)
               }
            };*/
      const cols = {
         sales: {
            alias: 'Событий',
            tickInterval: Math.ceil(VertMax / 4)
         }
      };
      return (
         <td colSpan='2'>
            <center>
               <Chart height={400}
                  forceFit
                  data={data}
                  scale={cols}
                  width={this.state.W_Width}
                  height={200}
               >

                  <Axis name="date_month" />
                  
                  <Axis name="sales" />
                  <Legend position="bottom" dy={-10} />
                  <Tooltip
                     crosshairs={{
                        type: "y"
                     }}
                  />
                  <Geom type="interval" position="date*sales"
                     color={"date"}
                  />
               </Chart>
            </center>
         </td>
      );
   }


}

