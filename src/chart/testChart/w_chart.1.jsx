import React, { Component, PropTypes } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';
import { max } from 'moment';
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
            date:"02/2019",
            date_moth:"02",
            type:'val',
            sales:8
         },
         {
            date:"03/2019",
            date_moth:"03",
            type:'val',
            sales:11
         },
         {
            date:"04/2019",
            date_moth:"04",
            type:'val',
            sales:1
         },

         {
            date:"02/2019",
            date_moth:"02",
            type:'norm',
            sales:2
         },
         {
            date:"03/2019",
            date_moth:"03",
            type:'norm',
            sales:2
         },
         {
            date:"04/2019",
            date_moth:"04",
            type:'norm',
            sales:2
         }

      ];
      const cols = {
         date_moth: {
           
         }
       };
      return (
         <div>
         <Chart height={400} data={data} scale={cols} forceFit>
           
           <Axis name="date_moth" />
           <Axis name="sales" />

           <Geom
             type="interval"
             position="date_moth*sales"
             color={"type"}             
           />


           <Geom
               type="line"
               position="date_moth*sales"
               size={4}
               color={"type"}
               
             />

           
        

         </Chart>
       </div>
         );
   }
}
   /*

render() {
    const data = [
      {
          month: "Jan",
          city: "Tokyo",
          temperature: 7
      },
      {
          month: "Jan",
          city: "London",
          temperature: 3.9
      },
      {
          month: "Feb",
          city: "Tokyo",
          temperature: 6.9
      },
      {
          month: "Feb",
          city: "London",
          temperature: 4.2
      },
      {
          month: "Mar",
          city: "Tokyo",
          temperature: 9.5
      },
      {
          month: "Mar",
          city: "London",
          temperature: 5.7
      },
      {
          month: "Apr",
          city: "Tokyo",
          temperature: 14.5
      },
      {
          month: "Apr",
          city: "London",
          temperature: 8.5
      },
      {
          month: "May",
          city: "Tokyo",
          temperature: 18.4
      },
      {
          month: "May",
          city: "London",
          temperature: 11.9
      },
      {
          month: "Jun",
          city: "Tokyo",
          temperature: 21.5
      },
      {
          month: "Jun",
          city: "London",
          temperature: 15.2
      },
      {
          month: "Jul",
          city: "Tokyo",
          temperature: 25.2
      },
      {
          month: "Jul",
          city: "London",
          temperature: 17
      },
      {
          month: "Aug",
          city: "Tokyo",
          temperature: 26.5
      },
      {
          month: "Aug",
          city: "London",
          temperature: 16.6
      },
      {
          month: "Sep",
          city: "Tokyo",
          temperature: 23.3
      },
      {
          month: "Sep",
          city: "London",
          temperature: 14.2
      },
      {
          month: "Oct",
          city: "Tokyo",
          temperature: 18.3
      },
      {
          month: "Oct",
          city: "London",
          temperature: 10.3
      },
      {
          month: "Nov",
          city: "Tokyo",
          temperature: 13.9
      },
      {
          month: "Nov",
          city: "London",
          temperature: 6.6
      },
      {
          month: "Dec",
          city: "Tokyo",
          temperature: 9.6
      },
      {
          month: "Dec",
          city: "London",
          temperature: 4.8
      }
    ];
    const cols1 = {
      month: {
        range: [0, 1]
      }
    };
    const cols = {
      value: {
        min: 0
      },
      month: {
        range: [0, 1]
      }
    };
    return (
      <div>
        <Chart height={400} data={data} scale={cols} forceFit>
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
            shape={"smooth"}
          />
          
          <Geom type="interval" 
            position="month*temperature"
               color={"city"}
            />

        </Chart>
      </div>
    );
  }
}
*/








/*
  render() {

   const data = this.props.DataChart;
   let VertMax = 1;
   for (const iterator of this.props.DataChart) {
      if (VertMax < iterator.sales) {
         VertMax = iterator.sales;
      }
   }
   const cols = {
      sales: {
         alias: 'Событий',
         tickInterval: Math.ceil(VertMax / 4)
      }
   };
   return (
      <Chart
         padding="auto"
         forceFit
         width={this.state.W_Width /2 - 50}
         height={200}
         data={data}
         scale={cols}
         onClick={ev => { this.ClickAZS({ ev }) }}
      >
      <center><span>По АЗК</span></center>
         <Axis name="azs" />
         <Axis name="sales" title />
         <Legend position="bottom" dy={-10} />
         <Tooltip  showTitle={false}
            crosshairs={{
               type: "y"
            }}
         />
         <Geom type="interval" position="azs*sales"
            color={"azs"}
         />
      </Chart>
   );
}
*/




/*
   render() {
        const data = this.props.DataChart;
      let VertMax = 1;//1000
      for (const iterator of this.props.DataChart) {
         if (VertMax < iterator.sales) {
            VertMax = iterator.sales;
         }
      }

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

*/