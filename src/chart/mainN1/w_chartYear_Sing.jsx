import React, { Component, PropTypes } from 'react';

import {
   Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide, Facet, View, G2, Shape, Util
} from 'bizcharts';

import DataSet from "@antv/data-set";
import moment from 'moment';

const _Debuge = true;
let data = [
   {
      "date": "2019-01-28",
      "incident": 0
   },
   {
      "date": "2019-01-21",
      "incident": 7
   },
   {
      "date": "2019-01-14",
      "incident": 3
   },
   {
      "date": "2019-01-07",
      "incident": 5
   },
   {
      "date": "2019-01-01",
      "incident": 9
   }
]
Date.prototype.getWeek = function () {
   var onejan = new Date(this.getFullYear(), 0, 1);
   return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}


export default class w_chartYear_Sing extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width,
         Data: this.props.DataChart,
      }
   }
   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width });
      }
      if (this.props.DataChart != prevProps.DataChart) {
         this.setState({ Data: this.props.DataChart });
      }
   }
   getMonthWeek(date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const monthFirst = new Date(year, month, 0);
      const intervalDays = Math.round(
         (date.getTime() - monthFirst.getTime()) / 86400000
      );
      const index = Math.floor((intervalDays + monthFirst.getDay()) / 7);
      return index;
   }
   render() {

      let date = moment(new Date("2019-01-11"));

      

      const startPast_Week = moment().startOf('week').isoWeekday(1).add(-7, 'day');

      let start =  moment().startOf('week');


      //alert(startPast_Week);

      let date1 = new Date("2019-01-11");
      var D011 = moment(date1.toString()).local('ru').format('MM/YYYY');

      
      let _month = moment(date1.toString()).local('ru').format('MM/YYYY');

      const { DataView } = DataSet;
      const cols = {
         month: {
            type: "cat",
            values: [
               "январь"
            ]
         },
         incident: {
            type: "linear",
            min: 0,
            max: 10,
            sync: true
         },
         week: {
            type: "cat",
            values: ["5", "4", "3", "2", "1", "0"]
         },
         day: {
            type: "cat"
         },
         date: {
            type: "time"
         },
         time: {
            type: "time"
         },
         /*
         week: {
            type: "cat",
            values: ["5", "4", "3", "2", "1", "0"]
         },
         day: {
            type: "cat"
         },
         date: {
            type: "time"
         },
         time: {
            type: "time"
         },
         */
      };

      // Обработка данных
      // Увеличение прибыли, снижение
      // Добавление месяца, недели, недели каждого месяца
      /**/
      data.forEach((obj) => {
         const date = new Date(obj["date"]);
         const month = date.getMonth();
         obj.month = month;
         obj.day = date.getDay();
         obj.week = this.getMonthWeek(date).toString();
      }); // Сортировка данных

      const dv = new DataView();
      dv.source(data).transform({
         type: "sort-by",
         fields: ["day"],
         order: "DESC"
      });

      let _H = 600;

      return (
         <div>
            <Chart
               //height={window.innerHeight}
               width={this.state.W_Width}
               height={_H}
               data={dv}
               scale={cols}
               forceFit
               padding={[20, 120, 50, 120]}
            >
               <Tooltip title="date" />

               <Axis name="week" visible={false} />
               <Axis name="day" visible={false} />
               <Axis name="date" visible={false} />

               <Legend name="incident" offset={0} />

               <Facet
                  type="list"
                  fields={["month"]}
                  cols={3}
                  padding={[0, 15, 30, 15]}
                  colTitle={{
                     offsetY: -10,
                     style: {
                        fontSize: 14,
                        textAlign: "center",
                        fill: "#666"
                     }
                  }}
               >

                  <View>
                     <Geom
                        type="polygon"
                        //position="day*week*date"
                        position="day*week*date"
                        style={{
                           lineWidth: 1,
                           stroke: "#fff"
                        }}
                        color={[
                           "incident",
                           "#F51D27-#FA541C-#FFBE15-#FFF2D1-#E3F6FF-#85C6FF-#0086FA-#0A61D7"
                        ]}
                     />
                  </View>
               </Facet>
            </Chart>
         </div>
      );
   }
}
